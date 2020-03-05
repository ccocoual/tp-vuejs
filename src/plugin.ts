import { VueConstructor } from 'vue';

export default {
  install(Vue: VueConstructor) {
    Vue.directive('focus', {
      inserted(el) {
        el.focus();
      },
    });

    Vue.filter('truncate', (value: string, nbOfChars: number) => {
      if (nbOfChars > 0) {
        return `${value.substr(0, nbOfChars)}...`;
      }
      return value;
    });
  },
};
