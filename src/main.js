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

Vue.filter('truncate', (value, nbOfChars) => {
  if (nbOfChars > 0) {
    return `${value.substr(0, nbOfChars)}...`;
  }
  return value;
});

window.shows = data.shows;
window.vm = new Vue({
  render: (h) => h(App),
}).$mount('#app');
