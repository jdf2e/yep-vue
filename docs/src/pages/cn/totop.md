# Totop

> 回到顶部，可自定义按钮样式、出现按钮时的滚动距离。

-------------

## 引入

```javascript
import { yepTotop } from 'yepui';

Vue.use(yepTotop);
```

## 例子

基础用法

```html
<yep-totop
  :scrollDistance="500"
  ht="59px"
  wh="59px"
  :imgUrl="imgUrl"
>
</yep-totop>

```

## 参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| scrollDistance | 滚动距离 px/rem| String | | 屏幕高度 |
| ht | 返回顶部按钮高度 px/rem| String | | |
| wh | 返回顶部按钮宽度 px/rem| String | |  |
| imgUrl | 图片地址 | String | |  |
