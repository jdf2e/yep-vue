<template>
    <main>
        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-cell-swipe</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <Yep-cell-swipe :params="params" @handleConfirmClick="handleConfirmClick" @handleCancelClick="handleCancelClick">
                </Yep-cell-swipe>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
.page-wrapper > * {
  margin-bottom: 0.4rem;
}
</style>

<script>
export default {
  data() {
    return {
      params: [
        {
          text: 'swipe me 1',
        },
        {
          text: 'swipe me 2',
        },
        {
          text: 'swipe me 3',
        },
        {
          text: 'swipe me 4',
        },
        {
          text: 'swipe me 5',
        },
        {
          text: 'swipe me 6',
        },
        {
          text: 'swipe me 7',
        },
        {
          text: 'swipe me 8',
        },
        {
          text: 'swipe me 9',
        },
        {
          text: 'swipe me 10',
        },
        {
          text: 'swipe me 11',
        },
      ],
    };
  },
  methods: {
    handleConfirmClick(item) {
      alert(`handleConfirmClick: ${item.text}`);
    },
    handleCancelClick(item) {
      alert(`handleCancelClick: ${item.text}`);
    },
  },
  mounted() {},
  components: {},
};

</script>

