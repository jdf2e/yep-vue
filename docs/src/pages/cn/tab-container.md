# tab-container

> 面板，可切换显示子页面。

----------

## 引入

```javascript
import { yep-tab-container } from 'YepUI';

Vue.use(yep-tab-container);
```

## 例子


```html
  <yep-tab-container :hasTitle="hasTitle" :hdList="hdList">
      <div class="bd-0">
          <ul>
              <li v-for="n in 5" :key="n">item</li>
          </ul>
      </div>
      <div class="bd-1">
          <ul>
              <li v-for="n in 10" :key="n">item</li>
          </ul>
      </div>
      <div class="bd-2">
          <ul>
              <li v-for="n in 15" :key="n">item</li>
          </ul>
      </div>
  </yep-tab-container>
```

```js

hdList: [
    {
        name: 'tab0',
        selected: true,
    },
    {
        name: 'tab1',
        selected: false,
    },
    {
        name: 'tab2',
        selected: false,
    },
],
hasTitle: true,

```

## API
### yep-tab-container

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| name | 当前激活的 tab name | * | | |
| hasTitle | 是否有头部 | Boolean | |  |
