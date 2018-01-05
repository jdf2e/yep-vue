# 快速上手

本节将介绍如何在项目中使用 Yep UI。

-----------

## 使用 vue-cli

```bash
npm install -g vue-cli

vue init webpack projectname


```

## 安装YepUI ##

```bash

# 安装nrm #
npm install -g nrm

# 添加jdnpm源
nrm add jdnpm2 http://registry.m.jd.com/
nrm use jdnpm2

# 安装组件
npm install --save @jdcfe/YepUI
```

## 引入 Yep UI

你可以引入整个 Yep UI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Yep UI。


### 完整引入

在 main.js 中写入以下内容：
```javascript
  import vueComponent from '@jdcfe/YepUI'
  Vue.use(vueComponent)
```

### 按需引入

```javascript
  import {yepToast} from  '@jdcfe/YepUI'
  Vue.use(yepToast)
```
```javascript
new Vue({
  el: '#app',
  components: { App }
})
```


然后，将 .babelrc 修改为：
```json
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "YepUI",
      "style": true
    }
  ]]]
}
```

## 开始使用

至此，一个基于 Vue 和 Yep UI 的开发环境已经搭建完毕，现在就可以编写代码了。启动开发模式：

```bash
npm run dev
```

编译：

```bash
npm run build
```
各个组件的使用方法请参阅它们各自的文档。
