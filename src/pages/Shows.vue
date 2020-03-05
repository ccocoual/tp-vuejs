<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <div class="field">
      <label class="label">Search</label>
      <div class="control">
        <input @keypress.enter="search()" class="input" placeholder="Game of Thrones, Breaking Bad, ..."
               type="text" v-focus v-model="searchTerm">
      </div>
    </div>
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
          v-for="show of filteredShows"
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
  export default class Shows extends Vue {
    title: string = 'My TV shows';
    shows: Array<ShowInterface> = [];
    filteredShows: Array<ShowInterface> = [];
    searchTerm: string = '';

    mounted() {
      axios.get('http://localhost:4000/rest/shows').then((response) => {
        this.shows = response.data;
        this.filteredShows = response.data;
      });
    }

    toggleFavorite(show: ShowInterface) {
      this.$set(show.user, 'favorited', !show.user.favorited);

      axios.post(`http://localhost:4000/rest/shows/${show.id}/favorites`, {
        isFavorite: show.user.favorited,
      }).then(({ data }) => {
        // Redirect to detail if add to favorites
        if (data.user.favorited) {
          this.$router.push({ name: 'showDetail', params: { showId: show.id } });
        }
      });
    }

    search() {
      this.filteredShows = this.shows
        .filter((it: ShowInterface) => it.title.toUpperCase().indexOf(this.searchTerm.toUpperCase()) !== -1);
    }
  }
</script>
