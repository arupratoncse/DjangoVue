<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/"><span class="navbar-brand"><i class="fa fa-book"> Note</i></span></router-link>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <ul class="navbar-nav">
            <li class='nav-item'>
              <router-link :to="{ name: 'home'}" class="nav-link" exact>Home</router-link>
            </li>
            <li class='nav-item' v-if="!loggedIn">
              <router-link :to="{ name: 'login'}" class="nav-link">Login</router-link>
            </li>
            <li class='nav-item' v-if="!loggedIn">
              <router-link :to="{ name: 'register'}" class="nav-link">Register</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-if="loggedIn">
            <li class='nav-item '>
              <router-link :to="{ name: 'logout'}" class="nav-link">Logout</router-link>
            </li>
          </ul>
        </b-collapse>
      </nav>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['loggedIn'])
  }
}
</script>
