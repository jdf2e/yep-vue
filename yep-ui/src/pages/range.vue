<template>
    <main>
        <!-- popup -->
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-range</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-range">
                    <Yep-cell v-for="(item, index) in cells1" :title="item.title" :label="'value:' + item.value" :key="index">
                      <Yep-range :value.sync="item.value">
                        <div slot="start" v-if="item.start">{{ item.start }}</div>
                        <div slot="end" v-if="item.end">{{ item.end }}</div>
                      </Yep-range>
                    </Yep-cell>
                    <Yep-cell v-for="(item, index) in cells2" :title="item.title" :label="'value:' + item.value" :key="index">
                      <Yep-range :value.sync="item.value" :min="item.min || 0" :max="item.max || 100" :step="item.step || 1" :bar-height="item.barHeight || 1" :bar-color="item.barColor || '#26a2ff'" :disabled="item.disabled">
                        <div slot="start" v-if="item.start">{{ item.start }}</div>
                        <div slot="end" v-if="item.end">{{ item.end }}</div>
                      </Yep-range>
                    </Yep-cell>
                    <Yep-cell v-for="(item, index) in cells3" :title="item.title" :label="'value:' + item.value" :key="index">
                      <Yep-range :value.sync="item.value" :min="item.min || 0" :max="item.max || 100" :step="item.step || 1">
                        <div slot="start" v-if="item.start" :style="{ 'font-size': item.start + 'px' }">{{ item.start }}</div>
                        <div slot="end" v-if="item.end" :style="{ 'font-size': item.end + 'px' }">{{ item.end }}</div>
                      </Yep-range>
                    </Yep-cell>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
@import "./../assets/css/mixin";
.page-range {
  .Yep-cell-value {
    flex: 2.5;
    position: relative;
  }
  .Yep-range {
    width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 20,
      value3: 0,
      value4: 0,
      value5: 10,
      value6: 0,
      value7: 10,
      value8: 40,
      value9: 14,
      cells1: null,
      cells2: null,
      cells3: null,
    };
  },
  methods: {
    handleClick(item) {
      this.currentItem = item;
    },
  },
  mounted() {
    this.cells1 = [
      {
        title: '默认',
        value: this.value1,
      },
      {
        title: '预设 value',
        value: this.value2,
      },
      {
        title: '左右文字',
        value: this.value3,
        start: '0',
        end: '100',
      },
    ];
    this.cells2 = [
      {
        title: '定义步长',
        value: this.value4,
        step: 10,
      },
      {
        title: '定义区间',
        value: this.value5,
        start: '10',
        end: '90',
        min: 10,
        max: 90,
      },
      {
        title: '定义线宽',
        value: this.value6,
        barHeight: 5,
      },
      {
        title: '定义颜色',
        value: this.value7,
        barColor: '#f10215',
      },
      {
        title: '置为无效',
        value: this.value8,
        disabled: true,
      },
    ];
    this.cells3 = [
      {
        title: '字体大小',
        value: this.value9,
        start: '14',
        end: '22',
        min: 14,
        max: 22,
        step: 2,
      },
    ];
  },
  components: {},
};

</script>

