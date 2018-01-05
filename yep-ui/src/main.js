import Vue from 'vue';
// import Yepui from '@jdcfe/Yepui'
// import { toast, areaPick, confirm, popup } from '@jdcfe/Yepui'
import App from './App';
import router from './router';

// import submit from '../components/submit'
// import btnSwitch from '../components/btn-switch'

// 全部引入
// Vue.use(Yepui)
//
// 单个引入

// const components = [
//   toast,
//     areaPick,
//   confirm,
//     popup,
// ]
// components.map(component => {
//     Vue.use(component)
// })

import components from './modules/components';
import directives from './modules/directives';
import filters from './modules/filters';

components.map(component => Vue.use(component));
directives.map(directive => Vue.use(directive));
filters.map(filter => Vue.use(filter));

export default new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
