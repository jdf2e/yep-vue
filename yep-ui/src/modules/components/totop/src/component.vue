<template>
  <div class="Yep-round-btn-wrap">
    <span v-show="isTopShow"
          class="round-btn btn-top"
          :style="{
            'background':`url(${imgUrl})`,
            width: wh,
            height: ht,
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
          }"
          @click="goTop">
    </span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isTopShow: false,
        isTop: true,
        timer: null,
      };
    },
    props: ['scrollDistance', 'ht', 'wh', 'imgUrl'],
    computed: {},
    methods: {
      goTop() {
        const that = this;
        that.timer = setInterval(() => {
          const top = document.documentElement.scrollTop || document.body.scrollTop;
          const speed = Math.floor(-top / 5);
          document.documentElement.scrollTop = top + speed;
          document.body.scrollTop = top + speed;
          that.isTop = true;  // 用于阻止滚动事件清除定时器
          if (Number(top) === 0) {
            clearInterval(that.timer);
          }
        }, 30);
      },
      judgeTop() {
        const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(top);
        if (top > (this.scrollDistance ? this.scrollDistance : clientHeight)) {
          this.isTopShow = true;
        } else {
          this.isTopShow = false;
        }
        if (!this.isTop) {
          clearInterval(this.timer);
        }
        this.isTop = false;
      },
    },
    mounted() {
      const that = this;
      that.goTop();
      window.addEventListener('scroll', () => {
        that.judgeTop();
      });
      debugger;
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
  @import './../../../assists/css/mixin.scss';

  .Yep-round-btn-wrap {
    position: fixed;
    bottom: 1.35rem;
    right: .2rem;
    z-index: 99;
    .round-btn {
      display: block;
    }
  }
</style>
