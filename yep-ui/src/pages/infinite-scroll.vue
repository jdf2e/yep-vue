<template>
    <main class="page-navbar">
        <h1 class="page-title">
            <span>Yep-infiniteScroll</span>
            <router-link class="page-back router-link-active" to="/">
                返回
                <i class="Yepui Yepui-back"></i>
            </router-link>
        </h1>
        <div class="page">

            <!-- navbar -->
            <Yep-infiniteScroll @loadMore="loadMore">
              <ul>
                <li v-for="n in total" :key="n">item{{n}}</li>
              </ul>
            </Yep-infiniteScroll>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
@import "../modules/assists/css/mixin.scss";
li {
  line-height: 0.8rem;
  color: #333;
  padding: 0 0.2rem;
  @include border-bottom-1px(#d7d7d7);
}
</style>

<script>
export default {
  data() {
    return {
      total: 20,
    };
  },
  methods: {
    loadMore() {
      setTimeout(() => {
        this.total += 20;
      }, 2000);
    },
  },
  mounted() {},
  components: {},
};

</script>

