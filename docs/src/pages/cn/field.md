# Field

> 表单编辑器。

----------

## 引入

```javascript
import { field } from 'yepui';

Vue.use(field);
```

## 例子

基础用法
```html
<field 
    :inputs="inputs"
    @handleLinkClick="handleLinkClick"
 >
</field>

```

```js

data() {
    return {
        currentItem: {},
        inputs: {
            text: {
                label: '姓名',
                placeholder: '姓名',
                text: 'test',
            },
            phone: {
                label: '手机',
                placeholder: '手机号',
                text: '13333333333',

            },
            link: {
                label: 'link',

                placeholder: 'link',
                text: 'link',
            },
            pwd: {
              label: '密码',
              placeholder: '密码',
              text: 'dddddddd',
            }
        }
    }
},
methods: {
  handleLinkClick(){

  }
},

```


## API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| inputs的key | 输入框类型 | String | phone, link, pwd和其他 | text |
| handleLinkClick | 点击link的回调 | Function |  |  |
| placeholder | placeholder | String |  |  |
| text | input内容 | String |  |  |

