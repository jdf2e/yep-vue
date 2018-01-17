<template>
  <div class="Yep-tabbar">
    <div class="foot">
      <div class="nav-bottom">
        <div class="nav-tab " v-for="(tab,index) in tabs">
          <a href="javascript:void(0)" @click="handTabClick(tab,tabs,index)">
            <img :src="tab.imgUrl" alt="">
            <p class="nav-tit" :class="{'nav-cur':tab.selected}">{{tab.text}}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import { iphonexHack } from '../config/config';

  export default {
    data() {
      return {};
    },
    props: ['tabs'],
    methods: {
      handTabClick(tab, tabs, index) {
        for (let tabsIndex = 0; tabsIndex < tabs.length; tabsIndex += 1) {
          tabs[tabsIndex].selected = false;
        }
        tab.selected = true;
        this.$emit('handTabClick', index);
      },
    },
    mounted() {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
  @import './../../../assists/css/mixin.scss';

  .Yep-tabbar {
    .foot {
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 20;
      padding-bottom: constant(safe-area-inset-bottom);
      background-color: #fff;
    }

    .foot-iphonex {
      padding-bottom: 0.46rem;
      background-color: #fff;
    }

    .nav-bottom {
      width: 7.5rem;
      // height: 1.13rem;
      background-color: #fff;
      margin: 0 auto;
      @include box;
      @include both-side;
      .nav-tab {
        @include flex(1);
        margin-bottom: 0.1rem;
        a {
          img {
            margin: 0 auto .07rem auto;
            display: block;
          }
        }
        .nav-tit {
          font-size: 0.24rem;
          line-height: 0.33rem;
          text-align: center;
          color: #5A5A5A;
        }
        .nav-cur {
          display: block;
          color: #CC2729;
        }

      }
    }
  }

</style>
