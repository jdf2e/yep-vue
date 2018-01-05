<template>
    <main class="progress-bar">

        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-progress-bar</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <Yep-progress-bar :percent="percent"
                                  :colorStart="colorStart"
                                  :colorEnd="colorEnd"
                    >
                    </Yep-progress-bar>
                    <div>
                        <label for="">输入百分比:</label>
                        <input type="text" v-model="percent"/>
                    </div>
                    <div>
                        <label for="">输入渐变起始颜色:</label>
                        <input type="text" v-model="colorStart"/>
                    </div>
                    <div>
                        <label for="">输入渐变结束颜色:</label>
                        <input type="text" v-model="colorEnd"/>
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
.progress-bar .page-wrapper {
  input {
    height: 0.4rem;
    width: 30%;
    border: 1px solid #ddd;
  }
}

.page-wrapper > * {
  margin-bottom: 0.4rem;
}
</style>

<script>
export default {
  data() {
    return {
      percent: 0,
      colorStart: '#feaa36',
      colorEnd: '#ff5741',
    };
  },
  methods: {},
  mounted() {},
  components: {},
};

</script>

