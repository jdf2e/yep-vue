
import Vue from 'vue';
import Router from 'vue-router';
import route from '../config/route';


Vue.use(Router);

const router = new Router({
  hashbang: false,
  linkActiveClass: 'cur',
  root: '/',
  saveScrollPosition: true,
  transitionOnLoad: true,
  // mode: 'history',
  routes: route.route,
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;
  if (title) {
    document.title = title;
  }
  if (to.name === 'index' || to.name === '/') {
    document.body.style.backgroundColor = '#fafafa';
  } else {
    document.body.style.backgroundColor = '#fff';
  }
  next();
  return true;
});
export default router;

