# Checklist

> 复选框列表，依赖 <router-link to="cell">cell</a> 组件。

-------------

## 引入

```javascript
import { yepChecklist } from 'YepUI';

Vue.use(yepChecklist);
```

## 例子

```html
<yep-checklist
  :propsRadios="radios"
  @handleRadioSelect="handleRadioSelect">
</yep-checklist>

```

```javascript
data() {
  return {
    currentIndex:1,
    radios: {
      1: {
        text: '明细',
        disabled: false,
        selected: true
      },
      222: {
        text: '办公用品',
        disabled: true,
        selected: false
      },
      333: {
        text: '个人',
        disabled: false,
        selected: false
      },
    }
  }
},
methods: {
  handleRadioSelect(index) {
    this.currentIndex=index;

  },
},
```


## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| propsRadios | text代表radio文案,disabled表示是否禁用,selected是否选中 | Object | |
|handleRadioSelect | 选中radio的回调 | Boolean | | |
