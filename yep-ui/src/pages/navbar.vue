<template>
    <main class="page-navbar">
        <div class="page">

            <!-- navbar -->
            <Yep-navbar :navbarList="navbarList" :type="type" @navbarClick="navbarClick"></Yep-navbar>
        </div>

        <h1 class="page-title">
            <span>Yep-navbar</span>
            <router-link class="page-back router-link-active" to="/">
                返回
                <i class="Yepui Yepui-back"></i>
            </router-link>
        </h1>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
.page-navbar .page-title {
  bottom: 0;
  position: absolute;
  width: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      navbarList: [
        {
          name: 'tab0',
          selected: true,
        },
        {
          name: 'tab1',
          selected: false,
        },
      ],
      type: 'type0',
    };
  },
  methods: {
    navbarClick(index) {
      switch (index) {
        case 0:
          this.type = 'type0';
          break;
        case 1:
          this.type = 'type1';
          break;
        default:
          this.type = 'type0';
          break;
      }
    },
  },
  mounted() {},
  components: {},
};

</script>

