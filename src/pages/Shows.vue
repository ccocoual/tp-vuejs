<template>
    <div class="container">
        <h1 class="title">{{ title }}</h1>
        <div class="field">
            <label class="label">Search</label>
            <div class="control">
                <input class="input" type="text" placeholder="Game of Thrones, Breaking Bad, ..."
                v-model="searchTerm" @keypress.enter="search()" v-focus>
            </div>
        </div>
        <Card v-for="show of filteredShows"
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
      title: 'My TV shows',
      shows: [],
      filteredShows: [],
      searchTerm: '',
    };
  },
  mounted() {
    axios.get('http://localhost:4000/rest/shows').then((response) => {
      this.shows = response.data;
      this.filteredShows = response.data;
    });
  },
  methods: {
    toggleFavorite(show) {
      this.$set(show.user, 'favorited', !show.user.favorited);

      axios.post(`http://localhost:4000/rest/shows/${show.id}/favorites`, {
        isFavorite: show.user.favorited,
      }).then(({ data }) => {
        // Redirect to detail if add to favorites
        if (data.user.favorited) {
          this.$router.push({ name: 'showDetail', params: { showId: show.id } });
        }
      });
    },
    search() {
      this.filteredShows = this.shows
        .filter((it) => it.title.toUpperCase().indexOf(this.searchTerm.toUpperCase()) !== -1);
    },
  },
};
</script>
