<template>
  <div class="foot">
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'services' }">Services</router-link> |
      <router-link :to="{ name: 'contact' }">Contact</router-link>
      <!-- Add more links here as needed -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
};
</script>

<style scoped>
nav a {
  color: white;
}
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #1a4589;
  /* You can customize the background color */
  color: white;
  /* You can customize the text color */
}
</style>
