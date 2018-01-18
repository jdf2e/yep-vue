# Load More

> 上拉加载更多内容。

-------------

## 引入

```javascript
import { yepLoadMore } from 'YepUI';

Vue.use(yepLoadMore);
```

## 例子

```html
<yep-load-more @bottomMethod="readMore" :isLast="isLast" :isNull="isNull">
   <div class="load-block" v-for="user in userInfo" :key="user.name">
      {{user.name}}
    </div>
</yep-load-more>
```

```script
 export default {
      data() {
        return {
          isLast: false,
          isNull: false,
          userInfo: [
            {
              name: '用户1',
            },
            {
              name: '用户2',
            },
            {
              name: '用户3',
            },
            {
              name: '用户4',
            },
            {
              name: '用户5',
            },

          ],
        };
      },
      actived() {
        this.userInfo = [
          {
            name: '用户1',
          },
          {
            name: '用户2',
          },
          {
            name: '用户3',
          },
          {
            name: '用户4',
          },
          {
            name: '用户5',
          },
        ];
      },
      methods: {
        readMore() {
          this.userInfo = this.userInfo.concat([
            {
              name: '用户6',
            },
            {
              name: '用户7',
            },
            {
              name: '用户8',
            },
            {
              name: '用户9',
            },
            {
              name: '用户10',
            },
          ]);
          setTimeout(() => {
            this.isLast = true;
          }, 1000);
        },
      },
    };
```

## API
### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| isLast | 是否已经加载全部数据 | Boolean | |  false |
| isNull | 列表是否为空 | Boolean | |  false |
| bottomAllLoaded | 是否加载完毕，主要是为了让父组件告知显示完毕 | Boolean | |  true |
| bottomPullText | 上滑动时提示文案 |  String | |  '上拉刷新' |
| bottomDropText | 释放时提示文案 |  String | |  '释放更新' |
| bottomLoadingText | 加载时提示文案 |  String | |  '加载中...' |

### 事件
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| bottomMethod | 释放时执行该事件 | Function | | |
