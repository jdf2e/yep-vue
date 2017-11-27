# Switch

> 开关。

----------

## 引入

```javascript
import { btnSwitch } from 'yepui';

Vue.component(btnSwitch.name, btnSwitch);
```

## 例子

```html
<btn-switch 
    :currentStatus="switchOn" @handleSwitch="handleSwitch"
>
</btn-switch>

```


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| currentStatus | 绑定值 | Boolean | | |
| handleSwitch | 操作switch之后的回调 | Boolean | | |



