<template>
    <main class="ui-toast">
        <!-- toast -->
        <div >

            <div class="page-toast">
                <h1 class="page-title">
                    <span>Yep-Toast</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <button class="button button--default button--large" @click="handleToastNoImage">
                        <label class="button-text">点击弹出 Toast</label>
                    </button>
                    <button class="button button--default button--large" @click="handleToast">
                        <label class="button-text">点击弹出带有 icon 的 Toast</label>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
.ui-toast {
  .page-toast {
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleToast() {
      this.$yepToast({
        isImage: true,
        message: 'toast',
        duration: 1500,
      });
    },
    handleToastNoImage() {
      this.$yepToast({
        isImage: false,
        message: 'toast no image',
        duration: 1500,
      });
    },
  },
  mounted() {},
  components: {},
};

</script>
