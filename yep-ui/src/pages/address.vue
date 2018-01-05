<template>
    <main>
        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Address</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <button class="button button--default button--large" @click="handleToAddressList">
                        <label class="button-text">地址列表</label>
                    </button>
                    <button class="button button--default button--large" @click="handleToEditAddress">
                        <label class="button-text">新增地址</label>
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
    return {
      areaPickShow: false,
      payPassConfirmShow: false,
      popupShow: false,
      contentList: [
        { text: '未婚', cur: true },
        { text: '已婚', cur: false },
        { text: '离异', cur: false },
      ],
    };
  },
  methods: {
    handleToAddressList() {
      this.$router.push('/address/list');
    },
    handleToEditAddress() {
      this.$router.push('/address/edit');
    },
  },
  mounted() {},
  components: {},
};

</script>

