<template>
    <div>
      <h1 class="title">{{ pageTitle }}</h1>
      <router-link to="/" class="link">Home</router-link>
      <span class="separator"> | </span>
      <router-link to="/about" class="link">About</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pageTitle: String, // Pass the title as a prop
    },
  };
  </script>
  
  <style scoped>
  .title,
  .link,
  .separator {
    display: inline-block;
    vertical-align: middle;
  }
  
  .title {
    margin-right: 1rem;
    text-align: left;
  }
  
  .separator {
    color: #ccc;
    margin-right: 1rem;
  }
  </style>