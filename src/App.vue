<template>
  <div id="app">
    <div class="container">
      <nav class="navbar">
        <div class="navbar-brand">
          <router-link :to="{name: 'shows'}" class="navbar-item">
            <img alt="" src="./assets/img/logo.jpg">
            TV shows store
          </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link :to="{name: 'shows'}" active-class="is-active" class="navbar-item">
              Search
            </router-link>
            <router-link :to="{name: 'favorites'}" active-class="is-active" class="navbar-item">
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
