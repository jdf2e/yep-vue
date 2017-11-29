# Search

> 搜索框，可显示搜索结果列表。

----------

## 引入

```javascript
import { search } from 'yepui';

Vue.use(search);
```

## 例子

```html
<search ph="placeholder"
        @handleSearch="handleSearch"
        @focusEvt="handleFocusEvt"
        @blurEvt="handleBlurEvt"
></search>
```

```js

 handleSearch(message) {
      this.message= `search:${message}`;
      console.log(`search:${message}`);
  },
  handleFocusEvt(message) {
      this.message= `focus:${message}`;
  },
  handleBlurEvt(message) {
      console.log('blur');
      this.message= `blur:${message}`;

  }

```


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| ph | input的placeholder  | String | |   |
|handleSearch | 搜索确认回调 | Function | |  |
|handleFocusEvt | input获取焦点回调 | Function | |  |
|handleBlurEvt | input失去焦点回调 | Function | |  |

