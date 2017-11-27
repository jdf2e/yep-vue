import Vue from 'vue';
import VueRouter from 'vue-router';
import LANG_CONFIG from './langs.json';

Vue.use(VueRouter);

let defaultLang = {};

LANG_CONFIG.langs.forEach(item => {
  if (item.value === LANG_CONFIG.default) {
    defaultLang = item;
  }
});

const route = {
  // '/': {
  //   component: resolve => require(['./pages/README.md'], resolve),
  //   default_lang: defaultLang,
  //   langs: LANG_CONFIG.langs,
  //   title: '选择语言'
  // },

  '/cn': {
    title: '概述',
    language: 'cn',
    component: resolve => require(['./pages/cn/README.md'], resolve)
  },
  '/cn/quickstart': {
    title: '快速上手',
    language: 'cn',
    component: resolve => require(['./pages/cn/quickstart.md'], resolve)
  },
  '/cn/toast': {
    title: 'Toast',
    language: 'cn',
    component: resolve => require(['./pages/cn/toast.md'], resolve)
  },
  '/cn/indicator': {
    title: 'Indicator',
    language: 'cn',
    component: resolve => require(['./pages/cn/indicator.md'], resolve)
  },
  '/cn/loadmore': {
    title: 'Loadmore',
    language: 'cn',
    component: resolve => require(['./pages/cn/loadmore.md'], resolve)
  },
  '/cn/infinite-scroll': {
    title: 'Infinite scroll',
    language: 'cn',
    component: resolve => require(['./pages/cn/infinite-scroll.md'], resolve)
  },
  '/cn/confirm': {
    title: 'confirm',
    language: 'cn',
    component: resolve => require(['./pages/cn/confirm.md'], resolve)
  },
  '/cn/action-sheet': {
    title: 'Action sheet',
    language: 'cn',
    component: resolve => require(['./pages/cn/action-sheet.md'], resolve)
  },
  '/cn/popup': {
    title: 'Popup',
    language: 'cn',
    component: resolve => require(['./pages/cn/popup.md'], resolve)
  },
  '/cn/touch': {
    title: 'Touch',
    language: 'cn',
    component: resolve => require(['./pages/cn/touch.md'], resolve)
  },
  '/cn/lazyload': {
    title: 'Lazy load',
    language: 'cn',
    component: resolve => require(['./pages/cn/lazyload.md'], resolve)
  },
  '/cn/range': {
    title: 'Range',
    language: 'cn',
    component: resolve => require(['./pages/cn/range.md'], resolve)
  },
  '/cn/progress-bar': {
    title: 'Progress-bar',
    language: 'cn',
    component: resolve => require(['./pages/cn/progress-bar.md'], resolve)
  },
  '/cn/picker': {
    title: 'Picker',
    language: 'cn',
    component: resolve => require(['./pages/cn/picker.md'], resolve)
  },
  '/cn/datetime-picker': {
    title: 'Datetime Picker',
    language: 'cn',
    component: resolve => require(['./pages/cn/datetime-picker.md'], resolve)
  },
  '/cn/index-list': {
    title: 'Index List',
    language: 'cn',
    component: resolve => require(['./pages/cn/index-list.md'], resolve)
  },
  '/cn/palette-button': {
    title: 'Palette Button (2.0)',
    language: 'cn',
    component: resolve => require(['./pages/cn/palette-button.md'], resolve)
  },
  '/cn/header': {
    title: 'Header',
    language: 'cn',
    component: resolve => require(['./pages/cn/header.md'], resolve)
  },
  '/cn/tabbar': {
    title: 'Tabbar',
    language: 'cn',
    component: resolve => require(['./pages/cn/tabbar.md'], resolve)
  },
  '/cn/navbar': {
    title: 'Navbar',
    language: 'cn',
    component: resolve => require(['./pages/cn/navbar.md'], resolve)
  },
  '/cn/button': {
    title: 'Button',
    language: 'cn',
    component: resolve => require(['./pages/cn/button.md'], resolve)
  },
  '/cn/tips': {
    title: 'Tips',
    language: 'cn',
    component: resolve => require(['./pages/cn/tips.md'], resolve)
  },
  '/cn/cell': {
    title: 'Cell',
    language: 'cn',
    component: resolve => require(['./pages/cn/cell.md'], resolve)
  },
  '/cn/cell-swipe': {
    title: 'Cell Swipe',
    language: 'cn',
    component: resolve => require(['./pages/cn/cell-swipe.md'], resolve)
  },
  '/cn/spinner': {
    title: 'Spinner',
    language: 'cn',
    component: resolve => require(['./pages/cn/spinner.md'], resolve)
  },
  '/cn/tab-container': {
    title: 'TabContainer',
    language: 'cn',
    component: resolve => require(['./pages/cn/tab-container.md'], resolve)
  },
  '/cn/search': {
    title: 'Search',
    language: 'cn',
    component: resolve => require(['./pages/cn/search.md'], resolve)
  },
  '/cn/switch': {
    title: 'Switch',
    language: 'cn',
    component: resolve => require(['./pages/cn/switch.md'], resolve)
  },
  '/cn/checklist': {
    title: 'Checklist',
    language: 'cn',
    component: resolve => require(['./pages/cn/checklist.md'], resolve)
  },
  '/cn/radio': {
    title: 'Radio',
    language: 'cn',
    component: resolve => require(['./pages/cn/radio.md'], resolve)
  },
  '/cn/field': {
    title: 'Field',
    language: 'cn',
    component: resolve => require(['./pages/cn/field.md'], resolve)
  },
  '/cn/badge': {
    title: 'Badge',
    language: 'cn',
    component: resolve => require(['./pages/cn/badge.md'], resolve)
  },
};

const router = new VueRouter({
  routes: formatRoute(route).concat([{
      "path": "/",
      "redirect": "/cn"
  }])
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || document.title;
  next();
});

function formatRoute(route) {
  return Object.keys(route).map((path) => {
    const { language, title, component } = route[path]

    return {
      name: path,
      component,
      path,
      meta: Object.assign({}, route[path], {
        language: language || defaultLang.value,
      })
    }
  })
}

export default router;
