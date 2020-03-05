<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="field">
      <label class="label">Search</label>
      <div class="control">
        <input @input="e => setSearchTerm(e.target.value)" @keypress.enter="searchShows()" class="input"
               placeholder="Game of Thrones, Breaking Bad, ..." type="text" v-focus>
      </div>
    </div>
    <Card :creation-date="show.creation"
          :description="show.description"
          :genres="show.genres"
          :image="show.images.poster"
          :is-favorite="show.user.favorited"
          :key="show.id"
          :nb-seasons="show.seasons"
          :show-id="show.id"
          :status="show.status"
          :title="show.title"
          @toggle-favorite="toggleFavorite(show)"
          v-for="show of filteredShows"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      title: 'My TV shows',
    };
  },
  computed: mapState('shows', [
    'shows',
    'filteredShows',
    'searchTerm',
    'isShowsLoading',
  ]),
  mounted() {
    this.getShows();
  },
  methods: {
    ...mapActions('shows', ['getShows', 'searchShows', 'setSearchTerm']),
    ...mapActions('favorite-shows', ['setFavoriteShow']),
    toggleFavorite(show) {
      const favorited = !show.user.favorited;
      this.setFavoriteShow({
        showId: show.id,
        favorited,
      });

      // Redirect to detail if add to favorites
      if (favorited) {
        this.$router.push({
          name: 'showDetail',
          params: { showId: show.id },
        });
      }
    },
  },
};
</script>
