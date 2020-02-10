<template>
    <div class="container">
        <h1 class="title">{{ show.title }}</h1>
        <Card
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
import Card from '../components/Card.vue';

export default {
  components: {
    Card,
  },
  props: ['showId'],
  computed: {
    show() {
      return window.shows.find((it) => it.id === parseInt(this.showId, 10));
    },
  },
  methods: {
    toggleFavorite(show) {
      this.$set(show.user, 'favorited', !show.user.favorited);
    },
  },
};
</script>
