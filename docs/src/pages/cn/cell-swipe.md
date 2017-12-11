# Cell Swipe

> 可滑动的单元格，用法同 cell。

----------


## 引入

```javascript
import { yepCellSwipe } from 'yepui';

Vue.use(yepCellSwipe);
```

## 例子


```html
 <yep-cell-swipe :params="params" 
    @handleConfirmClick="handleConfirmClick"
    @handleCancelClick="handleCancelClick">
 </yep-cell-swipe>
```

```js

params:[
    {
        text:'swipe me 1',
    },
    {
        text:'swipe me 2',
    },
    {
        text:'swipe me 3',
    },
    {
        text:'swipe me 4',
    },
    {
        text:'swipe me 5',
    },
    {
        text:'swipe me 6',
    },
    {
        text:'swipe me 7',
    },
    {
        text:'swipe me 8',
    },
    {
        text:'swipe me 9',
    },
    {
        text:'swipe me 10',
    },
    {
        text:'swipe me 11',
    },
]

```

`content` 可以是 HTML 或者纯文本。

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| params.text  |  左侧文案   | String    |     |     |
| handleConfirmClick  |  左侧按钮回调   | Function    |     |     |
| handleCancelClick  |  右侧按钮回调   | Function    |     |     |

