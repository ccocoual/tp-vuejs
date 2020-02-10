import Vue from 'vue';
import App from './App.vue';

import data from './data/api.json';

import './assets/css/app.css';

Vue.config.productionTip = false;

window.shows = data.shows;
window.vm = new Vue({
  render: (h) => h(App),
}).$mount('#app');
