<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Phoenix_logo.jpg" />
    <HelloWorld msg="Phoenix Storage" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
