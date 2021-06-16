<template>
  <nav class="filter-nav">
    <button
      @click="updateFilter('all')"
      :class="{ active: currentFilter === 'all' }"
    >
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: currentFilter === 'completed' }"
    >
      View Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: currentFilter === 'ongoing' }"
    >
      View Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ["currentFilter"],
  methods: {
    updateFilter(filter) {
      console.log(filter);
      this.$emit("filterChange", filter);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>