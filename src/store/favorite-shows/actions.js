import axios from 'axios';

export default {
  getFavoriteShows({ commit }) {
    commit('setIsFavoriteShowsLoading', true);
    axios.get('http://localhost:4000/rest/shows')
      .then((response) => {
        const favoriteShows = response.data.filter((show) => show.user.favorited);
        commit('setFavoriteShows', favoriteShows);
        commit('setIsFavoriteShowsLoading', false);
      })
      .catch(console.error);
  },
  setFavoriteShow({ dispatch }, { showId, favorited }) {
    axios.post(`http://localhost:4000/rest/shows/${showId}/favorites`, {
      isFavorite: favorited,
    })
      .then(() => dispatch('getFavoriteShows'));
  },
};
