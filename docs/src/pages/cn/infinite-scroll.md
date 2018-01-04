# Infinite scroll

> 无限滚动指令。

-------------

## 引入

```javascript
import { yepInfiniteScroll } from 'yepui';

Vue.use(yepInfiniteScroll);
```

## 例子

为 HTML 元素添加 `loadMore` 指令可以传递加载的方法，内部可以自定义元素。

```html
<yep-InfiniteScroll @loadMore="loadMore">
  <ul>
    <li v-for="n in total" :key="n">item{{n}}</li>
  </ul>
</yep-InfiniteScroll>
```

```javascript
data() {
  return {
    total: 20,
  }
},
method: {
  loadMore() {
    setTimeout(() => {
      this.total += 20;
    }, 2500);
  }
}
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| loadMore | 触发加载后执行的方法 | function | |  |
