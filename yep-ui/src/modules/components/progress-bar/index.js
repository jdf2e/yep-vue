import progressBar from './src/component';

export default {
  install: (Vue) => {
    Vue.component('Yep-progress-bar', progressBar);
  },
};
