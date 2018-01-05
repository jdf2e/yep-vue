<template>
    <main>

        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-tips</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>

                <Yep-tips :show="show1" class="top" :tipId="1" :triangle="{}"
                      text="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内"
                      @handleCrossClick="handleCrossClick">
                </Yep-tips>
                <Yep-tips :show="show2" class="middle" :tipId="2" :triangle="{pos:'top',show:true}"
                      text="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内"
                      @handleCrossClick="handleCrossClick">
                    <i class="triangle bottom" ></i>
                </Yep-tips>
                <Yep-tips :show="show3" :tipId="3" class="bottom" :triangle="{pos:'top',show:true}"
                      text="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内"
                      @handleCrossClick="handleCrossClick">
                </Yep-tips>
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
      show1: true,
      show2: true,
      show3: true,
    };
  },
  methods: {
    handleCrossClick(id) {
      this[`show${id}`] = !this[`show${id}`];
    },
  },
  mounted() {},
  components: {},
};
</script>

