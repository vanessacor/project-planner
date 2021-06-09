<template>
  <article class="project" @click="toggleDetails">
    <div class="actions">
      <h3>{{ project.title }}</h3>
    </div>

    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: ["project"],

  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: #fffffe;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #ef4565;
}
h3 {
  cursor: pointer;
}
</style>