<template>
  <div class="phone">
    <iframe
      class="demo-page"
      :src="'//yep.jd.com/demos.html#' + (routePath === '/loadmore' ? '/pull-down' : (routePath === '/quickstart' ? '' : routePath))"
      frameborder="0">
    </iframe>
  </div>
</template>

<script>
  export default {
    name: 'phone',

    computed: {
      routePath() {
        if (this.$route.path === '/' || this.$route.path === '/cn') {
          return this.$route.path.replace(/.*/, '/index');
        }else{
          return this.$route.path.replace(/^\/(cn)/, '');
        }
      }
    }
  };
</script>

<style lang="css" scoped>
  .phone {
    background-image: url('./../assets/img/phone.png');
    box-sizing: border-box;

    min-width: 350px;
    display: inline-block;
    width: 380px;
    height: 760px;
    background-size: cover;
    padding: 60px 30px;
  }

  .demo-page {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
