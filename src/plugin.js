export default {
  install(Vue) {
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
  },
};
