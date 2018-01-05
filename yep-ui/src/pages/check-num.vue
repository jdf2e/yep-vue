<template>
    <main>
        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-check-num</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <Yep-check-num
                            current="1000"
                            :offset="1000"
                            @numUpdated="handleNumUpdated"
                    >
                    </Yep-check-num>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
.page-wrapper > * {
  margin-bottom: 0.4rem;
}
</style>

<script>
export default {
  data() {
    return {
      currentItem: {},
      btns1: [
        {
          text: '确定',
          textRed: true,
        },
      ],
      btns2: [
        {
          text: '确定',
          textRed: true,
        },
        {
          text: '取消',
        },
      ],
      btns3: [
        {
          text: '确定',
          textRed: true,
        },
        {
          text: '取消',
        },
        {
          text: '取消',
          bgRed: true,
        },
      ],
    };
  },
  methods: {
    handleNumUpdated(currentValue) {
      console.log(currentValue);
    },
  },
  mounted() {},
  components: {},
};

</script>

