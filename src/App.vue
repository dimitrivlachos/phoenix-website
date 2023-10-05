<template>
  <div id="app" class="flex flex-col h-screen">
    <!-- Navigation -->
    <nav class="bg-gray-800 text-white p-4 flex items-center justify-between">
      <!-- Logo on the left -->
      <div class="flex items-left">
        <img src="./assets/Phoenix_logo.png" alt="Logo" class="h-8 w-8 mr-2" />
      </div>

      <!-- Links in the middle -->
      <div class="flex items-center text-2xl">
        <router-link
          to="/"
          class="mx-2 px-4 py-2 border rounded-md text-white border-white hover:bg-white hover:text-gray-800"
          active-class="bg-white text-gray-800"
        >
          Home
        </router-link>
        <router-link
          :to="{ name: 'contact' }"
          class="mx-2 px-4 py-2 border rounded-md text-white border-white hover:bg-white hover:text-gray-800"
          active-class="bg-white text-gray-800"
        >
          Contact
        </router-link>
      </div>

      <!-- Title on the right -->
      <div class="text-4xl font-bold font-serif">
        <h1>Phoenix Storage</h1>
      </div>
    </nav>

    <!-- Page contents -->
    <div class="flex-1">
      <router-view />
    </div>

    <phoenix-footer />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PhoenixFooter from '@/components/PhoenixFooter.vue'

</script>

<style scoped>
  
</style>
