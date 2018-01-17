<template>
  <section class="loadmore" :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)', visibility: isShow ? 'visible' : 'hidden' }">
    <slot></slot>
    <slot name="bottom">
      <div class="loadmore__bottom" v-if="!isLast && !isNull">
        {{bottomText}}
      </div>
      <div class="loadmore__bottom" v-if="isLast && !isNull">
        没有更多了
      </div>
    </slot>
  </section>
</template>
<script>
  export default {
    name: 'Yep-load-more',
    data() {
      return {
        isShow: false,
        timer: null,
        bottomText: this.bottomPullText,
        startY: 0, // 触摸起始位置
        currentY: 0, // 滑动中记录触摸位置
        translate: 0, // 界面translate的距离
        triggerHieght: 5, // 触发loadmore的高度
        selfHeight: this.$el ? this.$el.clientHeight : 0,
        fetch: true,
      };
    },
    props: {
      bottomPullText: {
        type: String,
        default: '上拉刷新',
      },
      bottomDropText: {
        type: String,
        default: '释放更新',
      },
      bottomLoadingText: {
        type: String,
        default: '加载中...',
      },
      bottomMethod: {
        type: Function,
      },
      isNeedBottom: {
        type: Boolean,
        default: true,
      },
      isLast: {
        type: Boolean,
        default: false,
      },
      // 是否加载完毕，主要是为了让父组件告知显示完毕
      bottomAllLoaded: {
        type: Boolean,
        default: true,
      },
      isNull: {
        type: Boolean,
        default: false,
      },
      wrapper: {
        type: HTMLElement,
      },
    },
    mounted() {
      this.init();
      this.watchHasDate();
      setInterval(() => {
        this.selfHeight = this.$el.clientHeight;
      }, 1000);
    },
    watch: {
      selfHeight() {
        this.fetch = true;
      },
    },
    methods: {
      // 监测当组件内有数据时才显示
      watchHasDate() {
        this.timer = setInterval(() => {
          if (this.$el.clientHeight > 60) {
            this.isShow = true;
            clearInterval(this.timer);
          }
        }, 200);
      },

      // 初始化组件状态
      resetLoadMore() {
        this.bottomText = this.bottomPullText;
        this.translate = 0;
      },

      // 判断是否需要继续往下拉
      isNeedLoadMore() {
        if (this.isLast) {
          return false;
        }

        let scrollTop; // 滑动的的距离
        let clientHeight; // 内容的高度
        let screenHeight; // 容器的高度

        if (this.wrapper) {
          scrollTop = this.wrapper.scrollTop;
          screenHeight = this.wrapper.clientHeight;
          clientHeight = this.$el.clientHeight;
        } else {
          scrollTop = Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
          screenHeight = window.screen.availHeight;
          clientHeight = document.body.clientHeight;
        }
        if (clientHeight <= scrollTop + screenHeight + 5) {
          return true;
        }
        return false;
      },

      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
      },
      handleTouchMove(event) {
        if (this.isNeedLoadMore()) {
          const evt = window.event || event;
          this.currentY = event.touches[0].clientY;
          if (this.currentY < this.startY) {
            evt.preventDefault();
          }
          this.translate = Math.min((this.currentY - this.startY) / 3, 0);
          if (Math.abs(this.translate) >= this.triggerHieght) {
            this.bottomText = this.bottomDropText;
          } else {
            this.bottomText = this.bottomPullText;
          }
        }
      },
      handleTouchEnd() {
        if (Math.abs(this.translate) >= this.triggerHieght) {
          this.translate = 0;
          if (!this.isLast && this.bottomText !== this.bottomLoadingText) {
            if (this.fetch) {
              this.$emit('bottomMethod');
              this.fetch = false;
            }
          }
          this.bottomText = this.bottomLoadingText;
        } else {
          this.resetLoadMore();
        }
      },
      bindTouchEvents() {
        this.$el.addEventListener('touchstart', this.handleTouchStart);
        this.$el.addEventListener('touchmove', this.handleTouchMove);
        this.$el.addEventListener('touchend', this.handleTouchEnd);
      },

      init() {
        this.bindTouchEvents();
      },
    },
    destroyed() {
      if (this.timer) {
        window.clearInterval(this.timer);
      }
    },
  };
</script>
<style lang="scss" scoped>
  .loadmore{
    background-color: #fff;
  }
  .loadmore__bottom {
    line-height: 50px;
    font-size: 14px;
    text-align: center;
  }
</style>
