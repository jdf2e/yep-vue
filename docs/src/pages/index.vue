<template>
  <div class="outer-container">
    <home-page></home-page>
    <!--<canvas id="loiter" style="width: 100%; height: 800px; position: absolute;top: 0; left: 0; z-index: 100"></canvas>-->
    <card-item></card-item>
    <fast-start></fast-start>
  <introduction></introduction>
    <div class="toTop" :class="{'show': toTop, 'none': !toTop}" id="toTop" ref="toTop" @click="ScrollToTop">
     <svg class="icon" width="40px" height="40.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M570.201 721.872h-116.4v-116.4h116.4v116.4z" fill="#ffffff" /><path d="M337.401 489.073h-116.4v-116.4h116.4v116.4z" fill="#ffffff" /><path d="M686.599 605.472h-116.4v-116.4h116.4v116.4z" fill="#ffffff" /><path d="M802.999 489.073h-116.4v-116.4h116.4v116.4z" fill="#ffffff" /><path d="M453.8 605.472h-116.4v-116.4h116.4v116.4z" fill="#ffffff" /></svg>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import HomePage from './../components/HomePage.vue'
  import CardItem from './../components/CardItem.vue'
  import FastStart from './../components/FastStart.vue'
  import Introduction from './../components/Introduction.vue'
  import PageFooter from '../components/PageFooter.vue'
  import loiterInit from '../assets/js/loiter'
  import Rellax from 'rellax'
    export default {
    data () {
      return {
        toTop: false,
        scrollTop: 0
      }
    },
    components: {
      HomePage, CardItem, FastStart, Introduction, PageFooter
    },
      mounted(){
        var deviceWidth = document.documentElement.clientWidth;
        document.body.onmousewheel = document.body.onmousewheel = this.scrollFunc;
        document.body.ontouchmove = document.body.ontouchmove = this.scrollFunc;
        document.body.onscroll = this.scrollFunc;
        let rellax = new Rellax('.parallax-animation .rellax', {
          speed: -2,
          center: false,
          round: true,
          vertical: true,
          horizontal: false
        });
        loiterInit(window);
//        window.loiter.start({
//          num:20,
//          container:document.getElementsByTagName('canvas')[0],
//          FPS:200,
//          mode:'through',
//          color: '#efefef'
//          })
      },
      methods: {
        ScrollToTop () {
          this.toTop = false;
          var step = this.scrollTop / 50;
          if (this.scrollTop > 0) {
            this.scrollTop -= step;
            document.body.scrollTop = this.scrollTop
            document.documentElement.scrollTop = this.scrollTop
            setTimeout(this.ScrollToTop, 10)
          } else {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }
        },
  scrollFunc () {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          this.scrollTop = scrollTop;
    var firstPageHeight = document.body.clientWidth > 500 ? 876 : 425;
    if (scrollTop > firstPageHeight) {
      this.toTop = true;
    } else {
      this.toTop = false;
    }
    if ( document.body.clientWidth < 500 && scrollTop > 2999) {
      this.$refs.toTop.style.bottom = (scrollTop - 2999) + 50+'px';
    }
  }
      }
    };

</script>

<style lang="scss" rel="stylesheet/scss">
  .outer-container{
    width: 100%;
  }
</style>


