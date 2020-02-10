import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Shows from './pages/Shows.vue';
import ShowDetail from './pages/ShowDetail.vue';
import Favorites from './pages/Favorites.vue';

import './assets/css/app.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});

Vue.filter('truncate', (value, nbOfChars) => {
  if (nbOfChars > 0) {
    return `${value.substr(0, nbOfChars)}...`;
  }
  return value;
});

const router = new VueRouter({
  routes: [
    { name: 'shows', path: '/shows', component: Shows },
    {
      name: 'showDetail',
      path: '/shows/:showId',
      component: ShowDetail,
      props: true,
    },
    {
      name: 'favorites',
      path: '/favorites',
      component: Favorites,
      alias: '/starred',
    },
    { name: 'home', path: '', redirect: '/shows' },
  ],
});

window.vm = new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
