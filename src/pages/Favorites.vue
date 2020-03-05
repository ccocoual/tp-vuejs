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
    ></Card>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import axios from 'axios';

  import Card from '../components/Card.vue';
  import { ShowInterface } from '@/models/show.interface';

  @Component({
    components: {
      Card,
    },
  })
  export default class Favorites extends Vue {
    title: string = 'My favorites shows';
    shows: Array<ShowInterface> = [];

    get favoriteShows() {
      return this.shows.filter((it) => it.user.favorited);
    }

    mounted() {
      axios.get('http://localhost:4000/rest/shows').then((response) => {
        this.shows = response.data;
      });
    };

    toggleFavorite(show: ShowInterface) {
      this.$set(show.user, 'favorited', !show.user.favorited);
      axios.post(`http://localhost:4000/rest/shows/${show.id}/favorites`, {
        isFavorite: show.user.favorited,
      });
    }
  }
</script>
