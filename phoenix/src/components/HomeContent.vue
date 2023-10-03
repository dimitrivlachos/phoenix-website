<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Located in Midrand, Phoenix Storage Solutions is a homely storage facility
      <br />
      that offers a variety of storage options to suit your needs. <br /><br />

      Sound like something you need? Check out our <br />
      <a
        href="https://www.instagram.com/phoenix_6018_storage/"
        target="_blank"
        rel="noopener"
        >Instagram</a
      >!
    </p>
    <h3>Downloadable Documents</h3>
    <button
      @click="
        downloadItem({
          url: 'https://github.com/dimitrivlachos/phoenix-website/blob/main/phoenix/src/assets/Phoenix6018%20Rental%20Agreement.pdf',
          label: 'Phoenix Rental Agreement',
        })
      "
    >
      Phoenix Rental Agreement
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeContent",
  props: {
    msg: String,
  },
  methods: {
    async downloadItem({ url, label }) {
      axios
        .get(url, { responseType: "blob" })
        .then((response) => {
          const blob = new Blob([response.data], { type: "application/pdf" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = label;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
