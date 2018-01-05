<template>
    <main class="cont-inputs">
        <div>
            <div class="page">
                <h1 class="page-title">
                    <span>Yep-field</span>
                    <router-link class="page-back router-link-active" to="/">
                        返回
                        <i class="Yepui Yepui-back"></i>
                    </router-link>
                </h1>
                <div class="page-wrapper">
                    <Yep-field :inputs="inputs" @handleLinkClick="handleLinkClick"></Yep-field>
                    <p>{{inputs}}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" rel="stylesheet/scss">
@import "../modules/assists/css/mixin.scss";

.page-wrapper > * {
  margin-bottom: 0.4rem;
}
</style>

<script>
export default {
  data() {
    return {
      currentItem: {},
      inputs: {
        text: {
          label: '姓名',
          placeholder: '姓名',
          text: 'test',
        },
        phone: {
          label: '手机',
          placeholder: '手机号',
          text: '13333333333',

        },
        link: {
          label: 'link',

          placeholder: 'link',
          text: 'link',
        },
        pwd: {
          label: '密码',
          placeholder: '密码',
          text: 'dddddddd',
        },
      },
    };
  },
  methods: {
    handleLinkClick() {

    },
  },
  mounted() {

  },
  components: {},
};
</script>

