<template>
<div>
<div v-if="this.$api.usr === 'undefined'"  ref="loginPanel" id="loginModal"></div>
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand ">
    <a class="navbar-item" href="https://www.impact-lab.tools" title="zurück">
      <span class="icon has-text-light">
        <i class="fas fa-home" aria-hidden="true" ></i>
      </span>
    </a>

  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
    <div class="navbar-item">
      <h1 class="is-hidden-mobile"><b>posifee</b></h1>
    </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item has-text-light">
        <h4> Eingeloggt als {{$api.usr.nickname || $api.usr.username}}.</h4>
      </div>
    </div>
  </div>
  
</nav>

     <div v-if="typeof($api.usr) === 'object'" id="app">
    <transition>
    <router-view/>
    </transition>
    </div>
    </div>
</template>

<script>

export default {
  name: 'app',
  mounted: function(){
    (this.$api.usr === 'undefined') ? this.$refs.loginPanel.appendChild(this.$api.uiModal) : {};
  }

}
</script>

<style>
body{
  overflow-y:hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y:hidden;
}

b-navbar{
  z-index:9999;
}
span {
  color:#363636;
}
</style>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #23d160;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
$input-focus-border: $primary;
$tabs-link-hover-color: $warning;
$tabs-link-active-color: $primary;
$tabs-link-color: $black;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>


