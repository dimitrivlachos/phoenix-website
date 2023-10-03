<template>
  <div class="home">
    <NavBar :display_logo="false" />
    <div class="imgbk">
      <img
        alt="Phoenix Logo"
        src="@/assets/Phoenix_logo.jpg"
        class="responsive-image"
      />
    </div>
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

<style scoped>
.imgbk {
  background-color: #1a4589;
  padding: 0px;
}

.responsive-image {
  max-width: 50%;
  height: auto;
}
</style>
