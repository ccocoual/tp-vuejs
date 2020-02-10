<template>
    <div class="container">
        <h1 v-if="show" class="title">{{ show.title }}</h1>
        <Card v-if="show"
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
  props: ['showId'],
  data() {
    return {
      show: null,
    };
  },
  mounted() {
    axios.get(`http://localhost:4000/rest/shows/${this.showId}`).then((response) => {
      this.show = response.data;
    });
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
