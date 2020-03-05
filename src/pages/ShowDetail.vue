<template>
  <div class="container">
    <h1 class="title" v-if="show">{{ show.title }}</h1>
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
          v-if="show"
    ></Card>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
  props: ['showId'],
  data() {
    return {
      show: null,
    };
  },
  mounted() {
    axios.get(`http://localhost:4000/rest/shows/${this.showId}`)
      .then((response) => {
        this.show = response.data;
      });
  },
  methods: {
    ...mapActions('favorite-shows', ['setFavoriteShow']),
    toggleFavorite(show) {
      this.$set(show.user, 'favorited', !show.user.favorited);
      this.setFavoriteShow({
        showId: show.id,
        favorited: show.user.favorited,
      });
    },
  },
};
</script>
