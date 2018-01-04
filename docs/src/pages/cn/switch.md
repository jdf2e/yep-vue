# Switch

> 开关。

----------

## 引入

```javascript
import { yepBtnSwitch } from 'yepui';

Vue.use(yepBtnSwitch);
```

## 例子

```html
<yep-btn-switch 
    :currentStatus="switchOn" @handleSwitch="handleSwitch"
>
</yep-btn-switch>

```


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| currentStatus | 绑定值 | Boolean | | |
| handleSwitch | 操作switch之后的回调 | Boolean | | |



