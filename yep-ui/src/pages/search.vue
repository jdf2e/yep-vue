<template>
    <main class="cont-inputs">
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-search</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <Yep-search ph="placeholder"
                        @handleSearch="handleSearch"
                        @focusEvt="handleFocusEvt"
                        @blurEvt="handleBlurEvt"

                ></Yep-search>
                <p>{{message}}</p>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
@import "../modules/assists/css/mixin.scss";

.page > * {
  margin-bottom: 0.4rem;
}
</style>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    handleSearch(message) {
      this.message = `search:${message}`;
      console.log(`search:${message}`);
    },
    handleFocusEvt(message) {
      this.message = `focus:${message}`;
    },
    handleBlurEvt(message) {
      console.log('blur');
      this.message = `blur:${message}`;
    },
  },
  mounted() {},
  components: {},
};

</script>

