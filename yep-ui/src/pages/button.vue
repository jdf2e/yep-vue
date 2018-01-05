<template>
    <main>
        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>button</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <Yep-btn :btns="btns1" @handleClick="handleClick"></Yep-btn>
                    <Yep-btn :btns="btns2" @handleClick="handleClick"></Yep-btn>
                    <Yep-btn :btns="btns3" @handleClick="handleClick"></Yep-btn>
                    <p>{{currentItem}}</p>
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
    handleClick(item) {
      this.currentItem = item;
    },
  },
  mounted() {},
  components: {},
};

</script>

