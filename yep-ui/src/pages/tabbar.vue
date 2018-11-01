<template>
    <main>
        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-tabbar</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <p>{{tabs[currentIndex]}}</p>
                </div>
                <Yep-tabbar :tabs="tabs" @handTabClick="handTabClick"></Yep-tabbar>
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
      currentIndex: 0,
      tabs: [
        {
          text: '111',
          selected: true,
          imgUrl: '//placehold.it/24x24',
        },
        {
          text: '222',
          selected: false,
          imgUrl: '//placehold.it/24x24',
        },
        {
          text: '333',
          selected: false,
          imgUrl: '//placehold.it/24x24',
        },
        {
          text: '444',
          selected: false,
          imgUrl: '//placehold.it/24x24',
        },
        {
          text: '555',
          selected: false,
          imgUrl: '//placehold.it/24x24',
        },
      ],
    };
  },
  methods: {
    handTabClick(index) {
      this.currentIndex = index;
    },
  },
  mounted() { },
  components: {},
};

</script>

