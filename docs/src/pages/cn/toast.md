# Toast

> 简短的消息提示框，支持自定义位置、持续时间和样式。

-------------
## 引入

```javascript
import Vue from 'vue'
import { yepToast } from 'yepui';
Vue.use(yepToast);
```

## 例子

基本用法

```javascript
this.$yepToast("提示信息");
```

在调用时传入一个对象即可配置更多选项

```javascript
  this.$yepToast({
    message: 'message',
    duration: 3000
  });
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
|   message  |  显示的消息内容   | string    |  —   |   —  |
| duration | 显示的时长（毫秒） | number |  —  |  3000  |
| isImage | 是否显示icon | bool |  true/false  |  true  |
