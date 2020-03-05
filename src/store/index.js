import Vue from 'vue';
import Vuex from 'vuex';
import shows from './shows';
import favoriteShows from './favorite-shows';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    shows,
    'favorite-shows': favoriteShows,
  },
  strict: debug,
});
