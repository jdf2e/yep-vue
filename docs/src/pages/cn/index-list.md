# Index List

> 索引列表，可由右侧索引导航快速定位到相应的内容。

-------------

## 引入

```javascript
import { yepIndexList, yepIndexSection } from 'YepUI';

Vue.use(yepIndexList);
Vue.use(yepIndexSection);
```

## 例子

```html
<yep-index-list>
  <yep-index-section index="A">
    <yep-cell title="Aaron"></yep-cell>
    <yep-cell title="Alden"></yep-cell>
    <yep-cell title="Austin"></yep-cell>
  </yep-index-section>
  <index-section index="B">
    <yep-cell title="Baldwin"></yep-cell>
    <yep-cell title="Braden"></yep-cell>
  </yep-index-section>
  ...
  <index-section index="Z">
    <yep-cell title="Zack"></yep-cell>
    <yep-cell title="Zane"></yep-cell>
  </yep-index-section>
</index-list>
```

`yep-index-section` 与右侧导航中的索引一一对应，`yep-index-section` 的 `index` 属性即为与其对应的索引的显示文本。`index-section` 标签内可为任意自定义内容。

当手指在右侧导航中滑动时，会在列表中间显示一个目前索引值的提示符。若不需要提示符，只需将 `show-indicator` 设为 `false`

```html
<yep-index-list :show-indicator="false">
  ...
</yep-index-list>
```

## API
### yep-index-list
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| height | 组件的高度。若不指定，则自动延伸至视口底 | Number | | |
| showIndicator | 是否显示索引值提示符 | Boolean | | true |

### yep-index-section
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| index | 索引值（必需参数） | String | | |

## Slot
### yep-index-list
| name | 描述 |
|------|--------|
| - | 一个或多个 `yep-index-section` 组件 |

### yep-index-section
| name | 描述 |
|------|--------|
| - | 单个 `yep-index-section` 的内容 |
