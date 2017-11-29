# tab-container

> 面板，可切换显示子页面。

----------

## 引入

```javascript
import { tabContainer } from 'yepui';

Vue.use(tabContainer);
```

## 例子

改变 ative 的值，与 `<tab-container-item>` 的 id 一致即显示对应页面。

```html
  <tabContainer :hasTitle="hasTitle" :hdList="hdList">
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
  </tabContainer>
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
### tab-container

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| name | 当前激活的 tab name | * | | |
| hasTitle | 是否有头部 | Boolean | |  |
