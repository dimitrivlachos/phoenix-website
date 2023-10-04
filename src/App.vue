<template>
  <div id="app">
    <img alt="Phoenix Logo" src="./assets/Phoenix_logo.png" />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
  
</style>
