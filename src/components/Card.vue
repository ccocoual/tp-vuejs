<template>
  <div class="card card-result">
    <div class="card-header">
      <p class="card-header-title">{{ titleFavorite }}</p>
      <a class="card-header-icon">
        <span class="icon">
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
            <span class="tag">{{ genres }}</span>
          </p>
          <p class="tags">
            <span class="tag is-warning">{{ status }}</span>
          </p>
          <div class="content">{{ description }}</div>
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
  computed: {
    titleFavorite() {
      return `${this.title} is ${this.isFavorite ? '' : 'not'} your favorite!`;
    },
  },
};
</script>
