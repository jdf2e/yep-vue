# Button

> 按钮，提供几种基础样式和尺寸，可自定义图标。

------------

## 引入

```javascript
import { yepTips } from 'yepui';

Vue.use(yepTips);
```

## 例子

```html
   <yep-tips 
     :show="show1" 
     class="top" 
     :tipId="1" 
     :triangle="{}"
      text="内容"
      @handleCrossClick="handleCrossClick"
    >
  </yep-tips>
  <yep-tips 
    :show="show2" 
    class="middle" 
    :tipId="2" 
    :triangle="{pos:'top',show:true}"
    text="内容"
    @handleCrossClick="handleCrossClick"
  >
    <i class="triangle bottom" ></i>
  </yep-tips>
  <yep-tips 
    :show="show3" 
    :tipId="3" 
    class="bottom" 
    :triangle="{pos:'top',show:true}"
    text="内容"
    @handleCrossClick="handleCrossClick"
  >
</yep-tips>
```

```js

  data() {
    return {
        show1: true,
        show2: true,
        show3: true,
    }
  },
  methods: {
    handleCrossClick(id) {
        this[`show${id}`] = !this[`show${id}`];
    },
  },

```

## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| id | tip的标识 | Number | |  |
| triangle.pos | 三角相关配置 | String | top,bottom  | top |
| triangle.show | 三角相关配置 | Boolean |   |  |
| handleCrossClick | 点击X的事件 | Boolean |   |  |


