<template>
  <div id="app">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <router-link class="navbar-item" :to="{name: 'shows'}">
            <img src="./assets/img/logo.jpg" alt="">
            TV shows store
          </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" active-class="is-active" :to="{name: 'shows'}">
              Search
            </router-link>
            <router-link class="navbar-item" active-class="is-active" :to="{name: 'favorites'}">
              Favorites
            </router-link>
          </div>
        </div>
      </nav>
    </div>

    <section class="hero is-primary">
      <div class="hero-body">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>
