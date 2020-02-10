import Vue from 'vue';
import App from './App.vue';

import data from './data/api.json';

import './assets/css/app.css';

Vue.config.productionTip = false;

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});

window.shows = data.shows;
window.vm = new Vue({
  render: (h) => h(App),
}).$mount('#app');
