<template>
  <div class="Yep-indexlist">
    <ul class="Yep-indexlist-content" ref="content"
        :style="{ 'height': currentHeight + 'px', 'margin-right': navWidth + 'px'}">
      <slot></slot>
    </ul>

    <div class="Yep-indexlist-nav" @touchstart="handleTouchStart" ref="nav">
      <ul class="Yep-indexlist-navlist">
        <li class="Yep-indexlist-navitem" v-for="section in sections" :key="section">{{ section.index }}</li>
      </ul>
    </div>

    <div class="Yep-indexlist-indicator" v-if="showIndicator" v-show="moving">{{ currentIndicator }}</div>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">

  .Yep-indexlist {
    width: 100%;
    position: relative;
    overflow: hidden;

    &-content {
      margin: 0;
      padding: 0;
      overflow: auto;
    }

    &-nav {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: 0;
      background-color: #fff;
      border-left: solid 1px #ddd;
      text-align: center;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &-navlist {
      padding: 0;
      margin: 0;
      list-style: none;
      max-height: 100%;
      display: flex;
      flex-direction: column;
    }

    &-navitem {
      padding: 2px 6px;
      font-size: .24rem;
      user-select: none;
      -webkit-touch-callout: none;
    }

    &-indicator {
      position: absolute;
      size: 50px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      line-height: 50px;
      background-color: rgba(0, 0, 0, .7);
      border-radius: 5px;
      color: #fff;
      font-size: .44rem;
      padding: 0 .1rem 0 .1rem;
    }
  }
</style>

<script type="text/babel">
  export default {
    name: 'index-list',
    props: {
      height: Number,
      showIndicator: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        sections: [],
        navWidth: 0,
        indicatorTime: null,
        moving: false,
        firstSection: null,
        currentIndicator: '',
        currentHeight: this.height,
        navOffsetX: 0,
      };
    },

    watch: {
      sections() {
        this.init();
      },
      height(val) {
        if (val) {
          this.currentHeight = val;
        }
      },
    },

    methods: {
      init() {
        this.$nextTick(() => {
          this.navWidth = this.$refs.nav.clientWidth;
        });
        const listItems = this.$refs.content.getElementsByTagName('li');
        if (listItems.length > 0) {
          this.firstSection = listItems[0];
        }
      },

      handleTouchStart(e) {
        if (e.target.tagName !== 'LI') {
          return;
        }
        this.navOffsetX = e.changedTouches[0].clientX;
        this.scrollList(e.changedTouches[0].clientY);
        if (this.indicatorTime) {
          clearTimeout(this.indicatorTime);
        }
        this.moving = true;
        window.addEventListener('touchmove', this.handleTouchMove);
        window.addEventListener('touchend', this.handleTouchEnd);
      },

      handleTouchMove(e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
      },

      handleTouchEnd() {
        this.indicatorTime = setTimeout(() => {
          this.moving = false;
          this.currentIndicator = '';
        }, 500);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('touchend', this.handleTouchEnd);
      },

      scrollList(y) {
        debugger;
        const currentItem = document.elementFromPoint(this.navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('Yep-indexlist-navitem')) {
          return;
        }
        this.currentIndicator = currentItem.innerText;
        const targets = this.sections.filter(section => section.index === currentItem.innerText);
        let targetDOM;
        if (targets.length > 0) {
          targetDOM = targets[0].$el;
          const targetDOMClientRect = targetDOM.getBoundingClientRect().top;
          const firstSectionClientRect = this.firstSection.getBoundingClientRect().top;
          this.$refs.content.scrollTop = targetDOMClientRect - firstSectionClientRect;
        }
      },
    },

    mounted() {
      if (!this.currentHeight) {
        window.scrollTo(0, 0);
        requestAnimationFrame(() => {
          const documentClientHeight = document.documentElement.clientHeight;
          const contentClientHeight = this.$refs.content.getBoundingClientRect().top;
          this.currentHeight = documentClientHeight - contentClientHeight;
        });
      }
      this.init();
    },
  };
</script>
