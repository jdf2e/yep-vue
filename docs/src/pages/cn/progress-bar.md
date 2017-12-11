# Progress-bar

> 进度条。

-------------

## 引入

```javascript
import { yepProgressBar } from 'yepui';

Vue.use(yepProgressBar);
```

## 例子

```html
 <yep-progress-bar 
   :percent="percent"
   :colorStart="colorStart"
   :colorEnd="colorEnd"
  >
  </yep-progress-bar>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| percent | 进度条的值（%） | Number | | 0 |
| colorStart | 进度条渐变颜色的起始值 | String | | #feaa36 |
| colorStart | 进度条渐变颜色的结束值 | String | | #ff5741 |

