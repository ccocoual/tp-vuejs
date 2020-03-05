import axios from 'axios';

export default {
  getShows({ commit }) {
    commit('setIsShowsLoading', true);
    axios.get('http://localhost:4000/rest/shows')
      .then((response) => {
        commit('setShows', response.data);
        commit('setFilteredShows', response.data);
        commit('setIsShowsLoading', false);
      })
      .catch(console.error);
  },

  searchShows({ state, commit }) {
    commit('setIsShowsLoading', true);
    const filteredShows = state.shows
      .filter((it) => it.title.toUpperCase()
        .indexOf(state.searchTerm.toUpperCase()) !== -1);

    commit('setFilteredShows', filteredShows);
    commit('setIsShowsLoading', false);
  },

  setSearchTerm({ commit }, searchTerm) {
    commit('setSearchTerm', searchTerm);
  },
};
