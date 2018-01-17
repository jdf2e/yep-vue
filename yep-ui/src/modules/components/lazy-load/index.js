import lazyLoad from './src/component.vue';
export default {
    install: (Vue) => {
        Vue.component('Yep-lazy-load', lazyLoad);
    }
}
