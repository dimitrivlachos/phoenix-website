<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Phoenix_logo.jpg" />
    <HomeContent msg="Phoenix Storage" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from "@/components/HomeContent.vue";

export default {
  name: "HomeView",
  components: {
    HomeContent,
  },
};
</script>
