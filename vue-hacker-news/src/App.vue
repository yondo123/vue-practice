<template>
  <div id="app">
    <hacker-head></hacker-head>
    <router-view></router-view>
  </div>
</template>

<script>
import HackerHead from "./components/HackerHead.vue";
export default {
  name: "App",
  components: {
    HackerHead,
  },
};
</script>
<style>
@import "./assets/list.css";
</style>
