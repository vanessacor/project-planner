<template>
  <article class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
      <div>
        <router-link
          class="material-icons"
          :to="{ name: 'EditProject', params: { id: project.id } }"
          >edit
        </router-link>
        <span class="material-icons" @click="deleteProject"> delete </span>
        <span class="material-icons tick" @click="toggleCompleted"> done </span>
      </div>
    </div>

    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </article>
</template>

<script>
import ApiClient from "../services/ApiClient";
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

    async deleteProject() {
      try {
        await ApiClient.deleteProject(this.project.id);
        this.$emit("delete", this.project.id);
      } catch (error) {
        console.log(error.message);
      }
    },

    async toggleCompleted() {
      try {
        await ApiClient.toggleStatus(this.project.id, {
          complete: !this.project.complete,
        });
        this.$emit("complete", this.project.id);
      } catch (error) {
        console.log(error.message);
      }
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

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}

.material-icons:hover {
  color: #094067;
}
.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}
</style>