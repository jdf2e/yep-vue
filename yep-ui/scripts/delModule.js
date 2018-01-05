const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const params = process.argv.splice(2);
const cmdSArr = 'ls ';
const fileDir = {
  directive:,
  directive: path.join(__dirname, `../src/modules/${answers.type}s/`),
  directive: path.join(__dirname, `../src/modules/${answers.type}s/`),
}

const questionsType = {
  type: 'list',
  name: 'type',
  message: '选择需要删除的组件类型',
  choices: ['component', 'directive', 'filter'],
  filter(val) {
    return val.toLowerCase();
  },
};

function getFiles(type) {
  let files = [path.join(__dirname, `../src/modules/${answers.type}s/`)];
  switch (type) {
    case 'directive':
      files.push()
      break;
    case 'component':
      return path.join(__dirname, `../src/modules/${answers.type}s/`)
      break;
    case 'directive':
      return path.join(__dirname, `../src/modules/${answers.type}s/`)
      break;
    case 'directive':
      return path.join(__dirname, `../src/modules/${answers.type}s/`)
      break;
    default:
      break
  }
}

inquirer.prompt(questionsType).then((answers) => {
  params.map((item) => {
    exec(`${cmdStr} ${item}`, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        console.log('删除失败，请检查命令后重试');
      } else {
        console.log(stdout);
        console.log(stderr);
      }
    });
  });
});

