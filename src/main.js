import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Shows from './pages/Shows.vue';
import ShowDetail from './pages/ShowDetail.vue';
import Favorites from './pages/Favorites.vue';
import Plugin from './plugin';

import store from './store';

import './assets/css/app.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Plugin);

const router = new VueRouter({
  routes: [
    {
      name: 'shows',
      path: '/shows',
      component: Shows,
    },
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
    {
      name: 'home',
      path: '',
      redirect: '/shows',
    },
  ],
});

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
