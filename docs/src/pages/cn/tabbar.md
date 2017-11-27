# Tabbar

> 底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。

-------------

## 引入

```javascript
import { tabbar } from 'yepui';

Vue.component(tabbar.name, tabbar);
```

## 例子


```html
 <tabbar :tabs="tabs" @handTabClick="handTabClick"></tabbar>
```

```js

tabs: [
  {
      text: '111',
      selected: true,
      imgUrl: '//placehold.it/24x24',
  },
  {
      text: '222',
      selected: false,
      imgUrl: '//placehold.it/24x24',

  },
  {
      text: '333',
      selected: false,
      imgUrl: '//placehold.it/24x24',

  },
  {
      text: '444',
      selected: false,
      imgUrl: '//placehold.it/24x24',

  },
  {
      text: '555',
      selected: false,
      imgUrl: '//placehold.it/24x24',

  },
],

```

## API

### tabbar
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| text | 每个tabbar item的文字 | String | |  |
| selected | tabbar item是否选中的状态 | Boolean | |  |
| imgUrl | 每个tabbar item的图片url | String | |  |


