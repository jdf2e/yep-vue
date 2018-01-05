<template>
    <main class="page-totop">

        <!-- totop -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-Totop</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yep-ui Yep-ui-back"></i>
                    </router-link>
                </h1>
                <div class="page-totop-wrapper">
                    <div class="totop-scroll-content">
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮<br><br><br><br><br><br><br><br><br><br>
                        内容区域，滚动高度大于视窗，出现回到顶部按钮
                    </div>
                </div>
            </div>
        </div>
        <Yep-totop :scrollDistance="500" ht="1.18rem" wh="1.18rem" :imgUrl="imgUrl"></Yep-totop>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
.page-totop {
  .page-totop-wrapper {
    width: 100%;
    padding: 0 20px;
  }
  .page-title {
    z-index: 999;
  }
}
.totop-scroll-content {
  padding: 1rem 0;
}
</style>

<script>

const topImg = require('../modules/assists/image/top.png');

export default {
  data() {
    return {
      imgUrl: topImg,
    };
  },
  methods: {},
  mounted() {},
  components: {},
};
</script>

