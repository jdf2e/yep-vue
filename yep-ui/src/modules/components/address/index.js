import list from './src/list.vue';
import edit from './src/edit.vue';

export default {
  install: (Vue) => {
    Vue.component('list', list);
    Vue.component('edit', edit);
  },
};
