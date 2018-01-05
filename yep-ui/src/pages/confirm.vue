<template>
    <main class="ui-toast">
        <!-- toast -->
        <div >
            <div class="page-toast">
                <h1 class="page-title">
                    <span>Yep-Confirm</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <button class="button button--default button--large" @click="handleConfirm">
                        <label class="button-text">点击弹出 Confirm</label>
                    </button>
                    <button class="button button--default button--large" @click="handleAlert">
                        <label class="button-text">点击弹出 Alert</label>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">

</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleConfirm() {
      this.$yepConfirm({
        title: 'test',
        message: 'test',
        leftTxt: '取消',
        rightTxt: '确认',
        submit: () => {
          alert('点击确认按钮');
        },
        cancel: () => {
          alert('点击取消按钮');
        },
      });
    },
    handleAlert() {
      this.$yepConfirm({
        title: 'test',
        message: 'test',
        leftTxt: '好的',
        submit: () => {
          alert('点击确认按钮');
        },
        cancel: () => {
          alert('点击取消按钮');
        },
      });
    },
  },
  mounted() {},
  components: {},
};

</script>
