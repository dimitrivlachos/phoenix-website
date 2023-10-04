<template>
  <div class="Services">
    <NavBar />
    <h1>This is an about page</h1>
  </div>
  <FooterBar />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

export default {
  name: "ServicesView",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>
