# Navbar


## 引入

```javascript
import { navbar } from 'yepui';

Vue.component('navbar', navbar);

```

## 例子

```html

<navbar 
    :navbarList="navbarList" 
    :type="type" 
    @navbarClick="navbarClick">
</navbar>

```

```js

data() {
    return {
        navbarList: [
            {
                name: 'tab0',
                selected: true,
            },
            {
                name: 'tab1',
                selected: false,
            },
        ],
        type: 'type0',
    };
},
methods: {
    navbarClick(index) {
        switch (index) {
            case 0:
                this.type = 'type0';
                break;
            case 1:
                this.type = 'type1';
                break;
            default:
                this.type = 'type0';
                break;
        }
    },
},

```

## API

### navbar

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| type | slot子组件的name | String | |  |
| name | nav item 的名称 | String | |  |
| selected | 是否选中 | Boolean | |  |

