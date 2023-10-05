<template>
  <div id="app" class="flex flex-col h-screen">
    <!-- Navigation -->
    <phoenix-header />

    <!-- Page contents -->
    <div class="flex-1">
      <router-view />
    </div>

    <phoenix-footer />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PhoenixHeader from '@/components/PhoenixHeader.vue'
import PhoenixFooter from '@/components/PhoenixFooter.vue'
</script>

