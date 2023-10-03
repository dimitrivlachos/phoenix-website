<template>
  <div class="navbar">
    <div v-if="display_logo" class="logo">
      <img alt="Phoenix Logo" src="@/assets/Phoenix_logo.jpg" />
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'services' }">Services</router-link>
      <!-- Add more links here as needed -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    display_logo: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: #1a4589; /* You can customize the background color */
  color: white; /* You can customize the text color */
}

.logo img {
  max-height: 200px; /* Adjust the height of the logo as needed */
  padding: 0;
  margin: 0;
}

.router-link-exact-active {
  /* You can add custom styling for the active link if needed */
  font-weight: bold;
}

nav {
  font-size: 40px; /* Adjust the font size as needed */
  padding: 1em;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: white;
  border-radius: 4px;
  padding: 0.5em;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
  border-radius: 4px;
  padding: 0.5em;
  text-decoration: underline;
}
</style>
