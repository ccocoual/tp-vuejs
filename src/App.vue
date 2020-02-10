<template>
  <div id="app">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="index.html">
            <img src="./assets/img/logo.jpg" alt="" />
            TV shows store
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item is-active" href="index.html">Search</a>
          </div>
        </div>
      </nav>
    </div>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ title }}</h1>
          <div class="field">
            <label class="label">Search</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Game of Thrones, Breaking Bad, ..."
                v-model="searchTerm"
                @keypress.enter="search()"
                v-focus
              />
            </div>
          </div>
          <Card
            v-for="show of shows"
            :key="show.id"
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
      </div>
    </section>
  </div>
</template>

<script>
import Card from './components/Card.vue';

export default {
  name: 'app',
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
    },
    search() {
      this.shows = window.shows.filter(
        (it) => it.title.toUpperCase().indexOf(this.searchTerm.toUpperCase()) !== -1,
      );
    },
  },
};
</script>
