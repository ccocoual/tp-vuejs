<template>
  <div class="card card-result">
    <div class="card-header">
      <p class="card-header-title">{{ titleFavorite }}</p>
      <a class="card-header-icon" @click="toggleFavorite()">
        <span class="icon" :class="{'is-favorite': isFavorite}">
          <i class="fa fa-star"></i>
        </span>
      </a>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x200">
            <img :src="image" alt="Image" />
          </figure>
        </div>
        <div class="media-content">
          <p class>Created in {{ creationDate }} - {{ nbSeasons }} seasons</p>
          <p class="tags">
            <span class="tag" v-for="genre of genres" :key="genre">{{ genre }}</span>
          </p>
          <p class="tags">
            <span class="tag" :class="[statusIsContinuing? 'is-warning': 'is-danger']">
              {{ status }}
            </span>
          </p>
          <div class="content" @click="toggleDescription()">
            <template v-if="longDescription">{{ description }}</template>
            <template v-else>{{ description | truncate(35) }}</template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'description',
    'status',
    'image',
    'creationDate',
    'nbSeasons',
    'genres',
    'isFavorite',
  ],
  data() {
    return {
      longDescription: false,
    };
  },
  computed: {
    titleFavorite() {
      return `${this.title} is ${this.isFavorite ? '' : 'not'} your favorite!`;
    },
    statusIsContinuing() {
      return this.status === 'Continuing';
    },
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite');
    },
    toggleDescription() {
      this.longDescription = !this.longDescription;
    },
  },
};
</script>
