<template>
    <main>
        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-cell</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div>
                    <Yep-cell title="标题文字"></Yep-cell>
                    <Yep-cell title="标题文字" value="说明文字"></Yep-cell>
                    <Yep-cell value="说明文字">
                        <span slot="title" class="cell-text" style="color:red">标题文字带样式</span>
                    </Yep-cell>
                    <Yep-cell title="标题文字" icon="link" value="带 icon"></Yep-cell>
                    <Yep-cell title="标题文字" icon="more">
                        <span>icon 是图片</span>
                        <img slot="icon" src="//placehold.it/24x24" width="24" height="24">
                    </Yep-cell>
                    <Yep-cell title="标题文字">
                        <button size="small" type="primary" icon="back">按钮</button>
                    </Yep-cell>
                    <Yep-cell title="标题文字" is-link value="带链接" :to="{ name: 'index' }"></Yep-cell>
                    <Yep-cell title="标题文字" is-link :to="{ name: 'index' }">
                        <span style="color: green">这里是元素</span>
                    </Yep-cell>
                    <Yep-cell title="标题" label="描述信息" is-link :to="{ name: 'index' }"></Yep-cell>

                    <Yep-cell title="原生跳转" label="跳转到 //www.jd.com" is-link to="//www.jd.com"></Yep-cell>
                    <Yep-cell title="路由跳转" label="跳转到 /#/index" is-link :to="{ name: 'index' }"></Yep-cell>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "./../assets/css/mixin";
.page-wrapper > * {
  margin-bottom: 0.4rem;
}
.icon-link {
  @include _icon(0.19rem, 0.3rem, 0.19rem 0.3rem, "../modules/assists/image/icon-link.png");
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick(item) {
      this.currentItem = item;
    },
  },
  mounted() {},
  components: {},
};

</script>

