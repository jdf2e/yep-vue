<template>
  <div class="Yep-tab-container">
    <div class="tab-container-hd" v-if="hasTitle">
      <span class="hd-item" :class="{'selected': item.selected}" v-for="(item, index) in hdList" :key="index" @click="hdClick(index)">{{item.name}}</span>
    </div>
    <div class="tab-container-bd" ref="dragArea" :style="{ 'transform': 'translate3d(' + translate + 'px, 0, 0)'}">
      <slot></slot>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        curIndex: 0,
        startX: 0,
        curX: 0,
        halfWidth: 0,
        wrapperWidth: 0,
        translate: 0,
        step: 0,
        abs: 0,
      }
    },
    props: ['hasTitle', 'hdList'],
    computed: {
    },
    methods: {
      hdClick(index) {
        console.log(index);
        this.curIndex = index;
        // this.$emit('hdClick', index);
        this.hdList.forEach((el, i) => {
          if ( i === index) {
            el.selected = true;
          } else {
            el.selected = false;
          }
        });
        this.step = this.translate = -this.wrapperWidth * this.curIndex;
      },
      startDrag() {
        this.startX = event.touches[0].clientX;
      },
      moveDrag() {
        this.curX = event.touches[0].clientX;
        this.abs = (this.curX - this.startX) / 1.5;
        this.translate = this.step + this.abs;
        // console.log(this.translate);
      },
      endDrag() {
        if (this.curIndex === 0 && (this.curX - this.startX > 0)) {
          this.translate = 0;
          return;
        }
        if (this.curIndex === this.hdList.length - 1 && (this.curX - this.startX < 0)) {
          this.translate = -this.wrapperWidth * (this.hdList.length - 1);
          return;
        }
        if (this.abs < 0) {
          if (Math.abs(this.abs) > this.halfWidth) {
            this.curIndex += 1;
          }
          this.translate = -this.wrapperWidth * this.curIndex;
        } else {
          if (Math.abs(this.abs) > this.halfWidth) {
            this.curIndex -= 1;
          }
          this.translate = -this.wrapperWidth * this.curIndex;
        }
        this.step = this.translate; 
      },
      bindEvents() {
        this.$refs.dragArea.addEventListener('touchstart', this.startDrag);
        this.$refs.dragArea.addEventListener('touchmove', this.moveDrag);
        this.$refs.dragArea.addEventListener('touchend', this.endDrag);
      },
      init() {
        this.bindEvents();
      },
    },
    mounted(){
      this.wrapperWidth = this.$refs.dragArea.clientWidth;
      this.halfWidth = this.wrapperWidth / 4;
      this.init();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
  @import './../../../assists/css/mixin.scss';
  .Yep-tab-container{
    position: relative;
    width: 100%;
    overflow: hidden;
    .tab-container-hd{
      @include box;
      padding: 0.2rem;
      .hd-item{
        @include auto-flex;
        padding: 0.16rem 0.2rem;
        font-size: 0.28rem;
        color: #333;
        border-radius: 0.1rem;
        background-color: #f1f1f1;
        margin: 0 0.2rem;
        &.selected{
          color: #f12030;
          background-color: #fff;
          @include bd-all-1px(#f12030, 0.1rem);
        }
      }
    }
    .tab-container-bd{
      @include box;
      transform: translate3d(0,0,0);
      transition: 0.2s ease;
    }
  }
</style>
