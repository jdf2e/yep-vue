<template>
    <main class="page-tab-container">
        <!-- tab-container -->
        <Yep-tabContainer :hasTitle="hasTitle" :hdList="hdList">
            <div class="bd-0">
                <ul>
                    <li v-for="n in 5" :key="n">item</li>
                </ul>
            </div>
            <div class="bd-1">
                <ul>
                    <li v-for="n in 10" :key="n">item</li>
                </ul>
            </div>
            <div class="bd-2">
                <ul>
                    <li v-for="n in 15" :key="n">item</li>
                </ul>
            </div>
        </Yep-tabContainer>

        <h1 class="page-title">
            <span>Yep-tab-container</span>
            <router-link class="page-back router-link-active" to="/">
                返回
                <i class="Yepui Yepui-back"></i>
            </router-link>
        </h1>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
@import "../modules/assists/css/mixin.scss";

.bd-0,
.bd-1,
.bd-2 {
  width: 100%;
  @include auto-flex;
  background-color: #f1f1f1;
}

.page-tab-container {
  .page-title {
    bottom: 0;
    position: absolute;
    width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      hdList: [
        {
          name: 'tab0',
          selected: true,
        },
        {
          name: 'tab1',
          selected: false,
        },
        {
          name: 'tab2',
          selected: false,
        },
      ],
      hasTitle: true,
    };
  },
  methods: {},
  mounted() {},
  components: {},
};

</script>

