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
  </div>
</template>

<script>
export default {
  name: "HomeContent",
  props: {
    msg: String,
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
