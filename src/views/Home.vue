<template>
  <main class="home">
    <FilterNav
      :currentFilter="currentFilter"
      @filterChange="currentFilter = $event"
    />
    <div v-if="projects.length">
      <section v-for="project in filterProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </section>
    </div>
    <div v-else>...Loading</div>
  </main>
</template>

<script>
import ApiClient from "@/services/ApiClient";
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav";

export default {
  name: "Home",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      currentFilter: "all",
    };
  },
  mounted() {
    this.getProjects();
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

    handleDelete(id) {
      this.projects = this.projects.filter((item) => item.id !== id);
    },

    handleComplete(id) {
      let project = this.projects.find((item) => {
        return item.id === id;
      });
      project.complete = !project.complete;
      console.log(this.projects);
    },
  },
  computed: {
    filterProjects() {
      if (this.currentFilter === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      if (this.currentFilter === "completed") {
        return this.projects.filter((project) => project.complete);
      }
      return this.projects;
    },
  },
};
</script>
