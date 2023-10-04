<template>
  <div id="app" class="flex flex-col h-screen">
    <!-- Navigation -->
    <nav class="bg-gray-800 text-white p-4 flex items-center justify-between">
      <!-- Logo on the left -->
      <div class="flex items-left">
        <img src="./assets/Phoenix_logo.png" alt="Logo" class="h-8 w-8 mr-2" />
      </div>
      <div class="flex items-center text-2xl">
        <router-link to="/" class="mx-2">Home</router-link> |
        <router-link :to="{ name: 'about' }" class="mx-2">About</router-link>
      </div>

      <!-- Title on the right -->
      <div class="text-xl font-bold">
        <h1>Phoenix Storage</h1>
      </div>
    </nav>

    <!-- Page contents -->
    <div class="flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
  
</style>
