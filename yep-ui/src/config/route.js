import NavConfig from './nav.config.json';

const index = () => import('../pages/index.vue');
const main = () => import('../pages/main.vue');
const list = () => import('../modules/components/address/src/list.vue');
const edit = () => import('../modules/components/address/src/edit.vue');

// const main = r => require.ensure([], () => r(rMain), 'main');
// const list = r => require.ensure([], () => r(rList), 'addressList');
// const edit = r => require.ensure([], () => r(rEdit), 'addressEdit');
const mainRoute = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: '',
    },
    component: index,
  },
  {
    path: '/main',
    name: 'main',
    meta: {
      title: '',
    },
    component: main,
  },
  {
    path: '/address/list',
    name: 'list',
    meta: {
      title: '地址列表',
    },
    component: list,
  },
  {
    path: '/address/edit',
    name: 'edit',
    meta: {
      title: '地址列表',
    },
    component: edit,
  },
];

const registerRoute = (config) => {
  const route = [];
  config.map(nav => nav.list.map((page) => {
    try {
      mainRoute.push({
        path: page.path,
        name: page.name,
        components: require(`../pages${page.path}`),
      });
    } catch (e) {
      console.log(e);
      page.disabled = true;
    }
  }));

  return { route: route.concat(mainRoute), navs: config };
};

const route = registerRoute(NavConfig);
console.log(route);
// export const navs = route.navs;
export default route;
