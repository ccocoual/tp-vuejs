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
        <Card v-for="show of shows"
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
  data() {
    return {
      title: 'My TV shows',
      shows: window.shows,
      searchTerm: '',
    };
  },
  methods: {
    toggleFavorite(show) {
      this.$set(show.user, 'favorited', !show.user.favorited);

      // Redirect to detail if add to favorites
      if (show.user.favorited) {
        this.$router.push({ name: 'showDetail', params: { showId: show.id } });
      }
    },
    search() {
      this.shows = window.shows
        .filter((it) => it.title.toUpperCase().indexOf(this.searchTerm.toUpperCase()) !== -1);
    },
  },
};
</script>
