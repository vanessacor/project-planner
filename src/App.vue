<template>
  <Header />
  <router-view />
</template>
<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
};
</script>
<style>
body {
  background: #d8eefe;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #5f6c7b;
}
</style>
