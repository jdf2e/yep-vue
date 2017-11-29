# Index List

> 索引列表，可由右侧索引导航快速定位到相应的内容。

-------------

## 引入

```javascript
import { indexList, indexSection } from 'yepui';

Vue.use(indexList);
Vue.use(indexSection);
```

## 例子

```html
<index-list>
  <index-section index="A">
    <cell title="Aaron"></cell>
    <cell title="Alden"></cell>
    <cell title="Austin"></cell>
  </index-section>
  <index-section index="B">
    <cell title="Baldwin"></cell>
    <cell title="Braden"></cell>
  </index-section>
  ...
  <index-section index="Z">
    <cell title="Zack"></cell>
    <cell title="Zane"></cell>
  </index-section>
</index-list>
```

`index-section` 与右侧导航中的索引一一对应，`index-section` 的 `index` 属性即为与其对应的索引的显示文本。`index-section` 标签内可为任意自定义内容。

当手指在右侧导航中滑动时，会在列表中间显示一个目前索引值的提示符。若不需要提示符，只需将 `show-indicator` 设为 `false`

```html
<index-list :show-indicator="false">
  ...
</index-list>
```

## API
### index-list
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| height | 组件的高度。若不指定，则自动延伸至视口底 | Number | | |
| showIndicator | 是否显示索引值提示符 | Boolean | | true |

### index-section
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| index | 索引值（必需参数） | String | | |

## Slot
### index-list
| name | 描述 |
|------|--------|
| - | 一个或多个 `index-section` 组件 |

### index-section
| name | 描述 |
|------|--------|
| - | 单个 `index-section` 的内容 |
