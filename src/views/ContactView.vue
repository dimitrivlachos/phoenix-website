<template>
  <div class="Contact">
    <NavBar />
    <h1>This is a contact page</h1>
  </div>
  <FooterBar />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "ContactView",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style scoped></style>
