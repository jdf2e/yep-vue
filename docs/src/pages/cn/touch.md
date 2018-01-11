# Touch

> 轮播图，可自定义轮播时间间隔、动画时长等。

-------------

## 引入

```javascript
import { touch } from 'YepUI';

Vue.use(touch);
```

## 例子

基础用法

```html
<figure class="code-wrap"
  v-touch:swipeleft="handleSwipeleft"
  v-touch:swiperight="handleSwiperight"
  v-touch:swipeup="handleSwipeup"
  v-touch:swipedown="handleSwipedown"
  v-touch:press="handlePress">
</figure>
```

```javascript
methods: {
  handleSwipeleft(){
    alert('左滑了')
 },
 handleSwiperight(){
    alert('右滑了')
 }, handleSwipeup(){
    alert('上滑了')
 }, handleSwipedown(){
    alert('下滑了')
 }, handlePress(){
    alert('按住了')
 },
}
```
