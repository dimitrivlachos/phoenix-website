<template>
  <div class="navbar">
    <div class="logo">
      <img alt="Phoenix Logo" src="@/assets/Phoenix_logo.jpg" />
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- Add more links here as needed -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  padding: 10px 20px;
  background-color: #1a4589; /* You can customize the background color */
  color: white; /* You can customize the text color */
}

.logo img {
  max-height: 200px; /* Adjust the height of the logo as needed */
  padding: 0;
  margin: 0;
}

.menu {
  font-size: 18px;
}

.router-link-exact-active {
  /* You can add custom styling for the active link if needed */
  font-weight: bold;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
