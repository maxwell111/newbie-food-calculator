<script>
export default {
  emits: ["searchFoodEvent"],
  data() {
    return {
      foodQuery: null,
    };
  },
  methods: {
    searchFoodEvent() {
      if (this.foodQuery) {
        this.$emit("searchFoodEvent", this.foodQuery);
        this.resetInputValue();
      }
    },
    resetInputValue() {
      this.foodQuery = "";
    },
  },
};
</script>

<template>
  <div class="search-form">
    <input
      v-model="foodQuery"
      placeholder="Enter your food e.g. banana or cheese"
      class="search-form-input form-input"
      @keyup.enter="searchFoodEvent"
    />
    <button class="button button-colored" @click="searchFoodEvent">
      Search
    </button>
  </div>
</template>
