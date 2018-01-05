<template>
    <main>

        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-checklist</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <Yep-checklist :propsRadios="radios" @handleRadioSelect="handleRadioSelect"></Yep-checklist>
                    <p>{{radios[currentIndex]}}</p>
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
      currentIndex: 1,
      radios: {
        1: {
          text: '明细',
          disabled: false,
          selected: true,
        },
        222: {
          text: '办公用品',
          disabled: true,
          selected: false,
        },
        333: {
          text: '个人',
          disabled: false,
          selected: false,
        },
      },
      //                radios: [
      //                    {
      //                        text: '明细',
      //                        disabled: false,
      //                        selected: true
      //                    },
      //                    {
      //                        text: '办公用品',
      //                        disabled: false,
      //                        selected: false
      //
      //                    }
      //                ]
    };
  },
  methods: {
    handleRadioSelect(index) {
      this.currentIndex = index;
      console.log(index);
    },
  },
  mounted() {},
  components: {},
};

</script>

