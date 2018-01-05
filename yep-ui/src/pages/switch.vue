<template>
    <main>

        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-switch</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <Yep-btn-switch :currentStatus="switchOn" @handleSwitch="handleSwitch"></Yep-btn-switch>
                    <span class="switch-span">{{switchOn}}</span>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
.page-wrapper {
  .switch-span {
    font-size: 0.3rem;
    margin-left: 0.5rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
      switchOn: true,
    };
  },
  methods: {
    handleSwitch() {
      this.switchOn = !this.switchOn;
    },
  },
  mounted() {},
  components: {},
};

</script>

