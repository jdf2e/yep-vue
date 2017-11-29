# confirm

> 弹出式提示框，有多种交互形式。

-------------
## 引入

```javascript
import Vue from 'vue'
import { confirm } from 'yepui';
Vue.use(confirm);
```

## 例子

以标题与内容字符串为参数进行调用

```javascript
confirm('提示', '操作成功');
```

或者传入一个对象

```javascript
 this.$confirm({
    title: 'test',
    message: 'test',
    leftTxt: '取消',
    rightTxt: '确认',
    submit: () => {
       alert('点击确认按钮')
    },
    cancel: () => {
       alert('点击取消按钮')
    }
 });
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| title | 提示框的标题 | String | | |
| message | 提示框的内容 | String | | |
| leftTxt | 左侧按钮文案,为空则不显示左侧按钮 | String | |  |
| rightTxt | 右侧按钮文案,为空则不显示右侧按钮 | String | |  |
| submit | 左侧按钮点击的回调 | Function | | |
| cancel | 右侧按钮点击的回调 | Function | | |
