# Progress-bar

> 进度条。

-------------

## 引入

```javascript
import { progressBar } from 'yepui';

Vue.component('progressBar',progressBar);
```

## 例子

传入 `value` 作为进度条的值。可自定义它的线宽

```html
<progress-bar :value="20" :bar-height="5"></progress-bar>
```

可在进度条两侧显示文字

```html
 <progress-bar 
   :percent="percent"
   :colorStart="colorStart"
   :colorEnd="colorEnd"
  >
  </progress-bar>
```

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| percent | 进度条的值（%） | Number | | 0 |
| colorStart | 进度条渐变颜色的起始值 | String | | #feaa36 |
| colorStart | 进度条渐变颜色的结束值 | String | | #ff5741 |

