<template>
    <router-view></router-view>
</template>

<style lang="scss" rel="stylesheet/scss">
@import "./assets/css/base";

body {
  background-color: #fafafa;
}
.page-title {
  display: block;
  position: relative;
  height: 20px;/*no*/
  line-height: 20px;/*no*/
  font-size: 20px;/*no*/
  margin: 20px auto;/*no*/
  text-align: center;
}
.page-back {
  display: inline-block;
  position: absolute;
  left: 20px;/*no*/
  top: 0;
  width: 40px;/*no*/
  height: 40px;/*no*/
  text-align: center;
}

.page-wrapper {
  padding: 0 20px;/*no*/
  top: 50%;
  position: absolute;
  width: 100%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.page-wrapper > button {
  display: block;
  width: 100%;
  color: #656b79;
  background-color: #f6f8fa;
  box-shadow: 0 0 1px #b8bbbf;/*no*/
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 4px;/*no*/
  border: 0;
  box-sizing: border-box;
  font-size: 18px;/*no*/
  height: 41px;/*no*/
  outline: 0;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.page-wrapper > button:not(:last-child) {
  margin-bottom: 20px;/*no*/
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {},
};

</script>
