import popup from './src/component';
import popupExternal from './src/popupExternal.vue';

export default {
  install: (Vue) => {
    Vue.component('Yep-popup', popup);
    Vue.component('Yep-popupExternal', popupExternal);
  },
};
