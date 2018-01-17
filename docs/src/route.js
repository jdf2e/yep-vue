import Vue from 'vue';
import VueRouter from 'vue-router';
import LANG_CONFIG from './langs.json';
import Index from './pages/index.vue';
import DocIndex from './pages/docIndex.vue';

Vue.use(VueRouter);

let defaultLang = {};

LANG_CONFIG.langs.forEach(item => {
  if (item.value === LANG_CONFIG.default) {
    defaultLang = item;
  }
});

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: Index,
    meta: {
      title: 'YepUI'
    }
  },
  {
    path: '/cn',
    component: DocIndex,
    children: [
      {
        path: '',
        redirect: 'quickstart'
      },
      {
        path: 'quickstart',
        component: resolve => require(['./pages/cn/quickstart.md'], resolve),
        meta: {
          title: '快速上手',
          language: 'cn',
        }
      },
      {
        path: 'toast',
        component: resolve => require(['./pages/cn/toast.md'], resolve),
        meta: {
          title: 'Toast',
          language: 'cn',
        }
      },
      {
        path: 'indicator',
        component: resolve => require(['./pages/cn/indicator.md'], resolve),
        meta: {
          title: 'Indicator',
          language: 'cn',
        }
      },
      {
        path: 'loadmore',
        component: resolve => require(['./pages/cn/loadmore.md'], resolve),
        meta: {
          title: 'Loadmore',
          language: 'cn',
        }
      },
      {
        path: 'Infinite scroll',
        component: resolve => require(['./pages/cn/infinite-scroll.md'], resolve),
        meta: {
          title: '快速上手',
          language: 'cn',
        }
      },
      {
        path: 'confirm',
        component: resolve => require(['./pages/cn/confirm.md'], resolve),
        meta: {
          title: 'Confirm',
          language: 'cn',
        }
      },
      {
        path: 'action-sheet',
        component: resolve => require(['./pages/cn/action-sheet.md'], resolve),
        meta: {
          title: 'Action sheet',
          language: 'cn',
        }
      },
      {
        path: 'popup',
        component: resolve => require(['./pages/cn/popup.md'], resolve),
        meta: {
          title: 'Popup',
          language: 'cn',
        }
      },
      {
        path: 'touch',
        component: resolve => require(['./pages/cn/touch.md'], resolve),
        meta: {
          title: 'Touch',
          language: 'cn',
        }
      },
      {
        path: 'range',
        component: resolve => require(['./pages/cn/range.md'], resolve),
        meta: {
          title: 'Range',
          language: 'cn',
        }
      },
      {
        path: 'totop',
        component: resolve => require(['./pages/cn/totop.md'], resolve),
        meta: {
          title: 'Totop',
          language: 'cn',
        }
      },
      {
        path: 'progress-bar',
        component: resolve => require(['./pages/cn/progress-bar.md'], resolve),
        meta: {
          title: 'Progress bar',
          language: 'cn',
        }
      },
      {
        path: 'picker',
        component: resolve => require(['./pages/cn/picker.md'], resolve),
        meta: {
          title: 'Picker',
          language: 'cn',
        }
      },
      {
        path: 'datetime-picker',
        component: resolve => require(['./pages/cn/datetime-picker.md'], resolve),
        meta: {
          title: 'Datetime picker',
          language: 'cn',
        }
      },
      {
        path: 'index-list',
        component: resolve => require(['./pages/cn/index-list.md'], resolve),
        meta: {
          title: 'Index list',
          language: 'cn',
        }
      },
      {
        path: 'header',
        component: resolve => require(['./pages/cn/header.md'], resolve),
        meta: {
          title: 'Header',
          language: 'cn',
        }
      },
      {
        path: 'tabbar',
        component: resolve => require(['./pages/cn/tabbar.md'], resolve),
        meta: {
          title: 'Tabbar',
          language: 'cn',
        }
      },
      {
        path: 'navbar',
        component: resolve => require(['./pages/cn/navbar.md'], resolve),
        meta: {
          title: 'Navbar',
          language: 'cn',
        }
      },
      {
        path: 'button',
        component: resolve => require(['./pages/cn/button.md'], resolve),
        meta: {
          title: 'Button',
          language: 'cn',
        }
      },
      {
        path: 'tips',
        component: resolve => require(['./pages/cn/tips.md'], resolve),
        meta: {
          title: 'Tips',
          language: 'cn',
        }
      },
      {
        path: 'cell',
        component: resolve => require(['./pages/cn/cell.md'], resolve),
        meta: {
          title: 'Cell',
          language: 'cn',
        }
      },
      {
        path: 'cell-swipe',
        component: resolve => require(['./pages/cn/cell-swipe.md'], resolve),
        meta: {
          title: 'Cell swipe',
          language: 'cn',
        }
      },
      {
        path: 'spinner',
        component: resolve => require(['./pages/cn/spinner.md'], resolve),
        meta: {
          title: 'Spinner',
          language: 'cn',
        }
      },
      {
        path: 'tab-container',
        component: resolve => require(['./pages/cn/tab-container.md'], resolve),
        meta: {
          title: 'Tab container',
          language: 'cn',
        }
      },
      {
        path: 'search',
        component: resolve => require(['./pages/cn/search.md'], resolve),
        meta: {
          title: 'Search',
          language: 'cn',
        }
      },
      {
        path: 'switch',
        component: resolve => require(['./pages/cn/switch.md'], resolve),
        meta: {
          title: 'Switch',
          language: 'cn',
        }
      },
      {
        path: 'checklist',
        component: resolve => require(['./pages/cn/checklist.md'], resolve),
        meta: {
          title: 'Checklist',
          language: 'cn',
        }
      },
      {
        path: 'radio',
        component: resolve => require(['./pages/cn/radio.md'], resolve),
        meta: {
          title: 'Radio',
          language: 'cn',
        }
      },
      {
        path: 'field',
        component: resolve => require(['./pages/cn/field.md'], resolve),
        meta: {
          title: 'Field',
          language: 'cn',
        }
      },
      {
        path: 'badge',
        component: resolve => require(['./pages/cn/badge.md'], resolve),
        meta: {
          title:'Badge',
          language: 'cn',
        }
      },
    ]
  },
]

const router = new VueRouter({
  routes: routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || document.title;
  next();
});


export default router;
