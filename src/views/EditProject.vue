<template>
  <h2>Edit {{ id }}</h2>

  <form @submit.prevent="handleSubmit">
    <label for="title">Title</label>
    <input type="text" required v-model="title" />
    <label for="details">Details</label>
    <textarea required id="" v-model="details"></textarea>
    <button>Submit</button>
  </form>
</template>

<script>
import ApiClient from "@/services/ApiClient";

export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
    };
  },
  mounted() {
    this.getOneProject(this.id);
  },
  methods: {
    async getOneProject(id) {
      const response = await ApiClient.getProjectById(id);
      this.title = response.data.title;
      this.details = response.data.details;
    },

    async handleSubmit() {
      const project = {
        title: this.title,
        details: this.details,
        complete: false,
      };
      try {
        const response = await ApiClient.updateProject(this.id, project);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>