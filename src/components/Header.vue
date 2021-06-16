<template>
  <header>
    <h1>Project Planner</h1>
    <NavBar />
  </header>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style scope>
header {
  margin-bottom: 80px;
}

h1 {
  color: #ef4565;
  text-align: center;
}
</style>