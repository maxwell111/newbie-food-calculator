<script>
import CloseButton from "./buttons/closeButton.vue";
import RemoveButton from "./buttons/removeButton.vue";
export default {
  name: "NutritionCalculateSidebar",
  components: {
    CloseButton,
    RemoveButton,
  },
  props: {
    calculatedData: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
  },
  emits: ["closeSidebarEvent", "removeFoodEvent"],
  computed: {
    totalCalories() {
      return this.calculatedData.reduce((sum, item) => {
        const {
          nutrition_data: { calories },
          serving_size: { amount },
          portion,
        } = item;
        return sum + (calories * Number(portion)) / amount;
      }, 0);
    },
    totalFat() {
      return this.calculatedData.reduce((sum, item) => {
        const {
          nutrition_data: { fat },
          serving_size: { amount },
          portion,
        } = item;
        return sum + (fat * Number(portion)) / amount;
      }, 0);
    },
    totalSugar() {
      return this.calculatedData.reduce((sum, item) => {
        const {
          nutrition_data: { sugar },
          serving_size: { amount },
          portion,
        } = item;
        return sum + (sugar * Number(portion)) / amount;
      }, 0);
    },
    totalProtein() {
      return this.calculatedData.reduce((sum, item) => {
        const {
          nutrition_data: { protein },
          serving_size: { amount },
          portion,
        } = item;
        return sum + (protein * Number(portion)) / amount;
      }, 0);
    },
    totalCarbs() {
      return this.calculatedData.reduce((sum, item) => {
        const {
          nutrition_data: { carbs },
          serving_size: { amount },
          portion,
        } = item;
        return sum + (carbs * Number(portion)) / amount;
      }, 0);
    },
    totalFormattedCarbs() {
      return this.totalCarbs.toFixed(2);
    },
    totalFormattedFat() {
      return this.totalFat.toFixed(2);
    },
    totalFormattedProtein() {
      return this.totalProtein.toFixed(2);
    },
    totalFormattedCalories() {
      return this.totalCalories.toFixed(2);
    },
    totalFormattedSugar() {
      return this.totalSugar.toFixed(2);
    },
  },
  methods: {
    closeSidebar() {
      this.$emit("closeSidebarEvent");
    },
    removeFoodItem(id) {
      this.$emit("removeFoodEvent", id);
    },
  },
};
</script>

<template>
  <div class="nutrition-calculate-sidebar calculate-sidebar">
    <div class="calculate-sidebar-list">
      <div
        v-for="foodItem in calculatedData"
        :key="foodItem.id"
        class="calculate-sidebar-item"
      >
        {{ foodItem.name }} - {{ foodItem.portion }} g
        <remove-button @click="removeFoodItem(foodItem.id)" />
      </div>
    </div>
    <div class="calculate-sidebar-total sidebar-total">
      <div class="sidebar-total-item">
        Total Calories <span>{{ totalFormattedCalories }} g</span>
      </div>
      <div class="sidebar-total-item">
        Total Fat <span>{{ totalFormattedFat }} g</span>
      </div>
      <div class="sidebar-total-item">
        Total Carbs <span>{{ totalFormattedCarbs }} g</span>
      </div>
      <div class="sidebar-total-item">
        Total Sugar <span>{{ totalFormattedSugar }} g</span>
      </div>
      <div class="sidebar-total-item">
        Total Protein <span>{{ totalFormattedProtein }} g</span>
      </div>
    </div>
    <close-button class="calculate-sidebar-close" @click="closeSidebar" />
  </div>
</template>
