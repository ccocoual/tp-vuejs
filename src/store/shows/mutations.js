export default {
  setShows(state, shows) {
    state.shows = shows;
  },
  setFilteredShows(state, filteredShows) {
    state.filteredShows = filteredShows;
  },
  setSearchTerm(state, searchTerm) {
    state.searchTerm = searchTerm;
  },
  setIsShowsLoading(state, isShowsLoading) {
    state.isShowsLoading = isShowsLoading;
  },
};
