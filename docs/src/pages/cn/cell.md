# Cell

> 单元格，可用作展示列表信息、链接或者表单等。

----------


## 引入

```javascript
import { yepCell } from 'YepUI';

Vue.use(yepCell);
```

## 例子

基础用法
```html
<yep-cell title="标题文字"></yep-cell>

<yep-cell title="标题文字" value="说明文字"></yep-cell>
```

可点击的链接

```html
<yep-cell
  title="标题文字"
  to="//github.com"
  is-link
  value="带链接">
</yep-cell>
```

带图标

```html
<yep-cell title="标题文字" icon="more" value="带 icon"></yep-cell>
```


带自定义图标

```html
<yep-cell title="标题文字">
  <span>icon 是图片</span>
  <img slot="icon" src="../assets/100x100.png" width="24" height="24">
</yep-cell>
```

自定义内容
```html
<yep-cell title="标题文字" is-link>
  <span style="color: green">这里是元素</span>
</yep-cell>
```

带备注信息
```html
<yep-cell title="标题" label="描述信息" is-link></yep-cell>
```


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
|   icon  |  图标   | String    |  back, more   |     |
| title | 标题 | String | | |
| to    | 跳转链接 | String | | |
| value | 内容 | * | | |
| label | 备注信息，显示在标题下方 | String | | |
| is-link | 链接，会显示箭头图标。搭配 to 属性使用 | Boolean | | |

## Slot
| name | 描述 |
|------|--------|
| - | 自定义显示内容 |
| title | 自定义标题 |
| icon | 自定义图标 |
