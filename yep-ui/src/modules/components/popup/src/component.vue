<template>
  <div class="Yep-popup" ref="popup" :class="{'active': isShow}" @click="popupClose">
    <ul :style="setTransform">
      <li v-for="(item, index) in contentList" :key="'popup'+index" :class="{'cur': item.cur}" @click="popupCloseByLi(index)">{{item.text}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: ['contentList','isShow'],
    computed: {
      setTransform() {
        return this.isShow ? 'transform: translate3d(0, ' + 0 + 'rem, 0);' : 'transform: translate3d(0, ' + 0.95*this.contentList.length + 'rem, 0);'
      }
    },
    methods: {
      popupClose() {
        this.$emit('popupClick');
      },
      popupCloseByLi(index) {
        let ev = window.event;
        ev.stopPropagation();
        this.$emit('liClick', index);
      }
    },
    mounted(){
      this.$refs.popup.addEventListener('touchmove', (ev) => {
        ev.preventDefault();
      }, false);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
  @import './../../../assists/css/mixin.scss';
  .Yep-popup{
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      text-align: center;
      background-color: rgba(0,0,0,0);
      @include box;
      @include vertical-center;
      @include horizontal-center;
      &.active{
          z-index: 20;
          background-color: rgba(0,0,0,0.4);
      }
      ul{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        -webkit-transition: all 0.2s;
        background-color: #fff;
        // transform: translate3d(0, 2.85rem, 0);
        li{
          line-height: 0.95rem;
          font-size: 0.28rem;
          text-align: center;
          color: #333;
          @include border-bottom-1px(#dedede);
          &:last-child{
            &:before{
              display: none;
            }
          }
          &.cur{
            color: #f12222;
          }
        }
      }
  }
</style>
