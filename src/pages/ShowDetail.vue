<template>
  <div class="container" v-if="isShow">
    <h1 class="title" >{{ show.title }}</h1>
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

    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';
  import axios from 'axios';

  import Card from '../components/Card.vue';
  import { ShowInterface } from '@/models/show.interface';

  @Component({
    components: {
      Card,
    },
  })
  export default class ShowDetail extends Vue {
    show: ShowInterface | null = null;

    @Prop() private showId?: string;

    mounted() {
      axios.get(`http://localhost:4000/rest/shows/${this.showId}`).then((response) => {
        this.show = response.data;
        console.log(this.show);
      });
    }

    get isShow() {
      return !!this.show;
    }

    toggleFavorite(show: ShowInterface) {
      this.$set(show.user, 'favorited', !show.user.favorited);
      axios.post(`http://localhost:4000/rest/shows/${show.id}/favorites`, {
        isFavorite: show.user.favorited,
      });
    }
  }
</script>
