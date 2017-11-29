# Totop

> 轮播图，可自定义轮播时间间隔、动画时长等。

-------------

## 引入

```javascript
import { totop } from 'yepui';

Vue.use(totop);
```

## 例子

基础用法

```html
<totop 
  :scrollDistance="500" 
  ht="1.18rem" 
  wh="1.18rem" 
  :imgUrl="imgUrl"
>
</totop>

```

## 参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| scrollDistance | 滚动距离 px/rem| String | | 屏幕高度 |
| ht | 返回顶部按钮高度 px/rem| String | | |
| wh | 返回顶部按钮宽度 px/rem| String | |  |
| imgUrl | 图片地址 | String | |  |
