<template>
  <div class="card card-result">
    <div class="card-header">
      <p class="card-header-title">
        <router-link :to="{name: 'showDetail', params: { showId: showId }}">
          {{ titleFavorite }}
        </router-link>
      </p>
      <a @click="toggleFavorite()" class="card-header-icon">
        <span :class="{'is-favorite': isFavorite}" class="icon">
          <i class="fa fa-star"></i>
        </span>
      </a>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x200">
            <img :src="image" alt="Image"/>
          </figure>
        </div>
        <div class="media-content">
          <p class>Created in {{ creationDate }} - {{ nbSeasons }} seasons</p>
          <p class="tags">
            <span :key="genre" class="tag" v-for="genre of genres">{{ genre }}</span>
          </p>
          <p class="tags">
            <span :class="[statusIsContinuing? 'is-warning': 'is-danger']" class="tag">
              {{ status }}
            </span>
          </p>
          <div @click="toggleDescription()" class="content">
            <template v-if="longDescription">{{ description }}</template>
            <template v-else>{{ description | truncate(35) }}</template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import { Prop } from 'vue-property-decorator';

  @Component
  export default class Card extends Vue {

    longDescription: boolean = false;
    @Prop() private showId?: string;
    @Prop() private title?: string;
    @Prop() private description?: string;
    @Prop() private status?: string;
    @Prop() private image?: string;
    @Prop() private creationDate?: Date;
    @Prop() private nbSeasons?: number;
    @Prop() private genres?: Array<string>;
    @Prop() private isFavorite?: boolean;

    get titleFavorite() {
      return `${this.title} is ${this.isFavorite ? '' : 'not'} your favorite!`;
    }

    get statusIsContinuing() {
      return this.status === 'Continuing';
    }

    toggleFavorite() {
      this.$emit('toggle-favorite');
    }

    toggleDescription() {
      this.longDescription = !this.longDescription;
    }

  };
</script>
