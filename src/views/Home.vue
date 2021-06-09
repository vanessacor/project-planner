<template>
  <main class="home">
    <div v-if="projects.length">
      <section v-for="project in projects" :key="project.id">
        <SingleProject :project="project" />
      </section>
    </div>
    <div v-else>...Loading</div>
  </main>
</template>

<script>
import ApiClient from "@/services/ApiClient";
import SingleProject from "../components/SingleProject.vue";
export default {
  name: "Home",
  components: { SingleProject },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    async getProjects() {
      try {
        const response = await ApiClient.getAllProjects();
        this.projects = response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>
