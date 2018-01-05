import toast from './src/main';

export default {
  install: (Vue) => {
    Vue.prototype.$yepToast = toast;
  },
};
