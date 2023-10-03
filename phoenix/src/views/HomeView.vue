<template>
  <div class="home">
    <NavBar />
    <HomeContent msg="Phoenix Storage" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from "@/components/HomeContent.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HomeContent,
  },
};
</script>
