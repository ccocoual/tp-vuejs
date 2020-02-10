<template>
    <div class="container">
        <h1 class="title">{{ title }}</h1>
        <Card v-for="show of favoriteShows"
            :key="show.id"
            :show-id="show.id"
            :title="show.title"
            :description="show.description"
            :status="show.status"
            :is-favorite="show.user.favorited"
            :image="show.images.poster"
            :creation-date="show.creation"
            :nb-seasons="show.seasons"
            :genres="show.genres"
            @toggle-favorite="toggleFavorite(show)"
            ></Card>
    </div>
</template>

<script>
import axios from 'axios';

import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      title: 'My favorites shows',
      shows: [],
    };
  },
  mounted() {
    axios.get('http://localhost:4000/rest/shows').then((response) => {
      this.shows = response.data;
    });
  },
  computed: {
    favoriteShows() {
      return this.shows.filter((it) => it.user.favorited);
    },
  },
  methods: {
    toggleFavorite(show) {
      this.$set(show.user, 'favorited', !show.user.favorited);
      axios.post(`http://localhost:4000/rest/shows/${show.id}/favorites`, {
        isFavorite: show.user.favorited,
      });
    },
  },
};
</script>
