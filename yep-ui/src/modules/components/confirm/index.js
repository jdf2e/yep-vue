import confirm from './src/main';

export default {
  install: (Vue) => {
    Vue.prototype.$yepConfirm = confirm;
  },
};
