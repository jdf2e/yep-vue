<template>
    <main>
        <!-- load-more -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>load-more</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div>
                    <Yep-load-more @bottomMethod="readMore" :isLast="isLast">
                      <div class="load-block" v-for="user in userInfo" :key="user.name">
                        <div class="avatar">
                          <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M674.922667 907.648l-139.648 0-93.098667 0 0-93.098667L442.176 209.450667 442.176 116.352l93.098667 0 139.648 0C867.712 116.352 1024 293.504 1024 512S867.712 907.648 674.922667 907.648zM674.922667 209.450667l-139.648 0 0 605.077333 139.648 0c141.376 0 256-135.466667 256-302.549333C930.922667 344.896 816.298667 209.450667 674.922667 209.450667zM46.549333 907.648 0 907.648l0-93.098667 46.549333 0c102.826667 0 186.197333-83.349333 186.197333-186.197333l0-512 93.098667 0 0 512C325.824 782.592 200.789333 907.648 46.549333 907.648z"
                              fill="#d81e06"/>
                          </svg>
                        </div>
                        <div class="name">
                          {{user.name}}
                        </div>
                        <div class="text-area">
                          <p>测试文本内容,撑起盒子高度</p>
                          <p> YepUI 是一款基于 Vue.js 2.0 的前端 UI 组件库，主要用于快速搭建移动端网站</p>
                        </div>
                      </div>
                    </Yep-load-more>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
  .page-wrapper {
    top: 3rem !important;
  }
  .load-block {
    height: 2.5rem;
    width: 90%;
    margin: 0 auto;
    padding: .1rem;
    border-bottom: 1px solid #8a8a8a;
    border-top: 1px solid #8a8a8a;
    overflow: hidden;
    .avatar {
      width: .8rem;
      height: .8rem;
      border-radius: 50%;
      border: 1px solid #8a8a8a;
      margin-top: .2rem;
      margin-left: .2rem;
      overflow: hidden;
      svg {
        margin-top: .1rem;
        margin-left: .1rem;
        width: .6rem;
        height: .6rem;
      }
    }
    .name {
      float: left;
      font-size: 20px;
      color: #232326;
      position: relative;
      bottom: .5rem;
      left: 1.2rem;

    }
    .text-area {
      margin: 0 .1rem 0 1.2rem;
      line-height: 150%;
    }
  }
</style>

<script>
    export default {
      data() {
        return {
          isLast: false,
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
</script>

