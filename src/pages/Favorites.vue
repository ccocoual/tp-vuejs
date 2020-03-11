<template>
  <div class="container">
    <span v-if="isFavoriteShowsLoading">Loading...</span>
    <div v-else>
      <h1 class="title">{{ title }}</h1>
      <Card v-for="show of favoriteShows"
            :key="show.id"
            :creation-date="show.creation"
            :description="show.description"
            :genres="show.genres"
            :image="show.images.poster"
            :is-favorite="show.user.favorited"
            :nb-seasons="show.seasons"
            :show-id="show.id"
            :status="show.status"
            :title="show.title"
            @toggle-favorite="toggleFavorite(show)"
      />

    </div>
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
      title: 'My favorites shows',
    };
  },
  mounted() {
    this.getFavoriteShows();
  },
  computed: mapState('favorite-shows', ['favoriteShows', 'isFavoriteShowsLoading']),
  methods: {
    ...mapActions('favorite-shows', ['getFavoriteShows', 'setFavoriteShow']),
    toggleFavorite(show) {
      this.setFavoriteShow({
        showId: show.id,
        favorited: !show.user.favorited,
      });
    },
  },
};
</script>
