<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
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
          v-for="show of favoriteShows"
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
      title: 'My favorites shows',
    };
  },
  mounted() {
    this.getFavoriteShows();
  },
  computed: mapState('favorite-shows', ['favoriteShows']),
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
