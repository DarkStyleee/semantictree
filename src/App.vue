<template>
  <nav class="link-box">
    <router-link class="link" to="/">Глоссарий</router-link>
    <router-link class="link" to="/semantic">Семантический граф</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "./assets/sass/main.scss";
</style>
