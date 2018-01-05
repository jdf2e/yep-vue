<template>
    <section class="page-index">
        <div v-for="(group, index) in navs" :key="index">
            <div class="page-title" v-text="group.title"></div>
            <router-link v-for="(item,key) in group.list" :to="item.path" :key="key">
                <div>
                    <i class="indexicon"></i>
                    <span>{{ item.name }}</span>
                    <s></s>
                </div>
            </router-link>
        </div>
    </section>
</template>

<style lang="scss" rel="stylesheet/scss">
.page-index {
  padding-bottom: 50px;/*no*/

  .indexicon {
    font-size: 22px;/*no*/
    color: #26a2ff;
    display: inline-block;
    width: 30px;/*no*/
    vertical-align: middle;

    &.icon-swipe {
      font-size: 26px;/*no*/
    }

    &.icon-checklist {
      font-size: 18px;/*no*/
    }
  }
  a {
    display: block;
    position: relative;
    background-color: #fff;
    box-sizing: border-box;
    color: inherit;
    min-height: 48px;/*no*/
    height: 48px;/*no*/
    line-height: 48px;/*no*/
    overflow: hidden;
    text-decoration: none;
    font-size: 16px;/*no*/
    s {
      position: absolute;
      display: block;
      border: 2px solid #c8c8cd;/*no*/
      border-bottom-width: 0;
      border-left-width: 0;
      right: 20px;/*no*/
      top: 20px;/*no*/
      width: 8px;/*no*/
      height: 8px;/*no*/
      -webkit-transform: translateY(-50%) rotate(45deg);
      transform: translateY(-50%) rotate(45deg);
    }
  }
}
</style>

<script type="text/babel">
import route from './../config/route';

export default {
  data() {
    return {
      navs: [],
    };
  },

  created() {
    console.log(route);
    this.navs = route.navs;
  },
};

</script>
