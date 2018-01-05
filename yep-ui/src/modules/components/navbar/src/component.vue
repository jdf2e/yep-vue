<template>
  <div class="Yep-navbar">
    <div class="navbar-hd">
        <div class="navbar-item" :class="{'selected': item.selected}" v-for="(item, index) in navbarList" :key="index" @click="navbarClick(index)">{{item.name}}</div>
    </div>
    <div class="navbar-bd">
      <component class="navbar-bd-item" :is="this.type"></component>
    </div>
  </div>
</template>
<script>


  export default {
    data () {
      return {
        curIndex: 0,
      }
    },
    props: ['navbarList', 'type'],
    computed: {
    },
    methods: {
      navbarClick(index) {
        this.navbarList.forEach((el, i) => {
          this.curIndex = i;
          if (i === index) {
            el.selected = true;
          } else {
            el.selected = false;
          }
        });
        this.$emit('navbarClick', index);
      },
    },
    components: {
      type0: {
        template: '<div>这里是子组件1</div>',
      },
      type1: {
        template: '<div>这里是子组件2</div>',
      },
      type2: {
        template: '<div>这里是子组件3</div>',
      },
    },
    mounted(){
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss">
  @import './../../../assists/css/mixin.scss';
  .Yep-navbar{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    .navbar-hd{
      @include box;
      @include both-side;
      .navbar-item{
        @include flex(1);
        font-size: 0.28rem;
        text-align: center;
        padding: 0.21rem 0;
        color: #333;
        &.selected{
            border-bottom: 3px solid #f12030;
        }
      }
    }
    .navbar-bd{
      @include box;
    }
  }
</style>
