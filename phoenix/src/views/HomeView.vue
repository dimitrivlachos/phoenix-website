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
    <HomeContent msg="Phoenix Storage Solutions" />
    <FooterBar />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from "@/components/HomeContent.vue";
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HomeContent,
    FooterBar,
  },
};
</script>

<style scoped>
.imgbk {
  background-color: #1a4589;
  padding: 0px;
}

.responsive-image {
  max-width: 25%;
  height: auto;
}
</style>
