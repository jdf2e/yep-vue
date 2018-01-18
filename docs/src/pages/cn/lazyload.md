# Lazy load

> 图片懒加载指令。

-------------

## 引入

```javascript
import { yepLazyLoad } from 'YepUI';

Vue.use(yepLazyLoad);
```

## 例子

```html
<Yep-lazy-load>

  <!-- 需要显示的图片列表-->
    <real-compnonet></real-compnonet>

    <!-- 显示图片之前用来过渡的动画或者骨架-->
    <skeleton-component slot="skeleton"></skeleton-component>

</Yep-lazy-load>
```

## API
### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| tagName | 设置组件的标签 | String | | 'div' |
| direction | 滑动方向 | String | 'horizontal'|  'vertical' |
| threshold | 组件玩外边距 | String | |  '0px' |
| maxWaitingTime | 最大等待时间 | Number | | 50 |
| timeout | 延迟时间 |   Number | |  |
