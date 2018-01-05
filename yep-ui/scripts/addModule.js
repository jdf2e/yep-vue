const inquirer = require('inquirer');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const jsonfile = require('jsonfile');

const navConfig = path.join(__dirname, '../src/config/nav.config.json');
const allAnswers = {};
const ejses = {
  component: ['single-use', 'vue', 'page'],
  directive: ['directive', 'page'],
  filter: ['filter', 'page'],
};

const questionsType = {
  type: 'list',
  name: 'type',
  message: '选择需要创建的组件类型',
  choices: ['component', 'directive', 'filter'],
  filter(val) {
    return val.toLowerCase();
  },
};

const questionsComponentType = {
  type: 'list',
  name: 'componentType',
  message: '选择需要创建的component类型',
  choices: ['js', 'css', 'form'],
  filter(val) {
    return val.toLowerCase();
  },
};

const questionsName = [
  {
    type: 'input',
    name: 'name',
    message: '组件名称（英文）',
    validate(value) {
      const pass = value.match(/^.*$/i);
      if (pass) {
        return true;
      }
      return 'Please enter a valid phone number';
    },
  },
];

function hyphenToCamelCase(str) {
  return str.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase());
}

// function firstUpperCase(str) {
//   return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
// }

function ejsToFile(type, params) {
  const data = fs.readFileSync(path.join(__dirname, `../ejs/${type}.ejs`), 'utf-8');
  return ejs.render(data, { params });
}
function writeNavConfig(answers) {
  try {
    let index = 0;
    if (answers.type === 'component') {
      switch (answers.componentType) {
        case 'js':
          index = 0;
          break;
        case 'css':
          index = 2;
          break;
        case 'form':
          index = 3;
          break;
        default:
          break;
      }
    } else {
      index = 1;
    }
    const obj = jsonfile.readFileSync(navConfig);
    obj[index].list.push({ path: `/${answers.name}`, name: answers.name, icon: answers.name });
    jsonfile.writeFileSync(navConfig, obj, { spaces: 2, EOL: '\r\n' });
    console.log(`修改nav.config.js，添加${answers.componentType ? `${answers.componentType}-${answers.type}` : answers.type} - {path: /${answers.name}, name: ${answers.name}, icon: ${answers.name}}`);
  } catch (e) {
    console.log(e);
  }
}


/**
 *
 * @param _path 用户选择的组件类型的对应的目录 如directives
 * @param type 用户选择的组件类型 如directive
 * @param ejsName 用户选择的组件类型所对应的ejs模板名
 */
function buildTotalExport(_path, type, ejsName) {
  return new Promise((resolve, reject) => {
    fs.readdir(_path, (err, files) => {
      const objName = {
        names: [],
        type: '',
      };
      let html = '';
      if (err) {
        reject(err);
        return;
      }
      files.forEach((file) => {
        const statInfo = fs.statSync(`${_path}/${file}`);
        if (statInfo.isDirectory()) {
          html += objName.names.push({
            original: file,
            camelCase: hyphenToCamelCase(file),
          });
        }
      });
      objName.type = type;
      fs.writeFileSync(path.join(__dirname, `../src/modules/${type}s/index.js`), ejsToFile(ejsName, objName));
      resolve(objName);
    });
  });
}


/**
 *
 * @param source 模板名称
 * @param answers 模板参数
 */
function createEach(source, answers) {
  try {
    const lowerName = answers.name.toLowerCase();
    let targetDir;
    let targetFileName;
    switch (source) {
      case 'single-use':
        targetDir = `../src/modules/${answers.type}s/${lowerName}/`;
        targetFileName = 'index.js';
        break;
      case 'one-type-exports':
        targetDir = `../src/modules/${answers.type}s/${lowerName}/`;
        targetFileName = 'index.js';
        break;
      case 'directive':
        targetDir = `../src/modules/${answers.type}s/${lowerName}/`;
        targetFileName = 'directive.js';
        break;
      case 'filter':
        targetDir = `../src/modules/${answers.type}s/${lowerName}/`;
        targetFileName = 'filter.js';
        break;
      case 'vue':
        targetDir = `../src/modules/${answers.type}s/${lowerName}/src/`;
        targetFileName = `${answers.type}.vue`;
        break;
      case 'page':
        targetDir = '../src/pages/';
        targetFileName = `${lowerName}.vue`;
        break;
      default:
        break;
    }
    const html = ejsToFile(source, answers);
    const dirPath = path.join(__dirname, targetDir);
    const filePath = path.join(dirPath, targetFileName);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    fs.writeFileSync(filePath, html);
    console.log(`生成 ${dirPath}${targetFileName}文件成功`);
  } catch (e) {
    console.log(e);
  }
}

function create(answers) {
  ejses[answers.type].map(item => createEach(item, answers));
  buildTotalExport(path.join(__dirname, `../src/modules/${answers.type}s/`), answers.type, 'one-type-exports').then((res) => {
    writeNavConfig(answers);
  });
}

inquirer.prompt(questionsType).then((answers) => {
  Object.assign(allAnswers, answers);
  if (answers.type === 'component') {
    return inquirer.prompt(questionsComponentType);
  }
  return inquirer.prompt(questionsName);
}).then((answers) => {
  Object.assign(allAnswers, answers);
  if (allAnswers.componentType) {
    return inquirer.prompt(questionsName);
  }
  return allAnswers;
}).then((answers) => {
  Object.assign(allAnswers, answers);
  allAnswers.camelName = hyphenToCamelCase(allAnswers.name);
  console.log('\nallAnswers:');
  console.log(JSON.stringify(allAnswers, null, '  '));
  create(allAnswers);
});

