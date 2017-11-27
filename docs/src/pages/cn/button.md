# Button

> 按钮，提供几种基础样式和尺寸，可自定义图标。

------------

## 引入

```javascript
import { Button } from 'yepui';

Vue.component(Button.name, Button);
```

## 例子

```html
<btn :btns="btns1" @handleClick="handleClick"></btn>
<btn :btns="btns2" @handleClick="handleClick"></btn>
<btn :btns="btns3" @handleClick="handleClick"></btn>
```

```js

btns1: [
    {
        text: '确定',
        textRed: true
    },
],
btns2: [
    {
        text: '确定',
        textRed: true
    },
    {
        text: '取消'
    },
],
btns3: [
    {
        text: '确定',
        textRed: true
    },
    {
        text: '取消'
    },
    {
        text: '取消',
        bgRed: true
    }
]

```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| text | 按钮文案 | String | |  |
| bgRed | 背景颜色 | Boolean | | false |
| textRed | 文字颜色 | Boolean |   | false |


