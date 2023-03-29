<script>
import { searchFoodItems } from "./services/api";
import { setURLSearchParams } from "./services/urlParams";
import { mapGetters, mapMutations } from "vuex";
import InfoModal from "./components/infoModal.vue";
import CalculateSidebar from "./components/calculateSidebar.vue";
import SearchForm from "./components/searchFoodForm.vue";
import SearchResults from "./components/searchFoodResults.vue";
import NoResults from "./components/noResults.vue";

export default {
  name: "App",
  components: {
    InfoModal,
    CalculateSidebar,
    SearchForm,
    SearchResults,
    NoResults,
  },
  data() {
    return {
      foodSearchData: [],
      foodCalculateData: [],

      modalInfoData: null,

      showNutritionInfoModal: false,
      showNutritionSidebar: false,
      showNoResultsBlock: false,
    };
  },
  computed: {
    isSidebarVisible() {
      return this.showNutritionSidebar && this.savedFoodItems.length;
    },
    ...mapGetters(["savedFoodItems"]),
  },
  created() {
    if (this.savedFoodItems.length) {
      this.showNutritionSidebar = true;
    }
    const urlData = Object.fromEntries(
      new URL(window.location).searchParams.entries()
    );
    if (urlData) {
      this.searchFood(...Object.values(urlData));
    }
  },
  methods: {
    async searchFood(query) {
      const queryTrimmed = query.trim();
      const data = await searchFoodItems(queryTrimmed);
      if (!data.length) {
        /*
          Show no-results block when we don't receive data.
          And empty our data array.
        */
        this.showNoResultsBlock = true;
        this.foodSearchData = [];
        return;
      }
      setURLSearchParams(query);
      this.foodSearchData = data;
      this.showNoResultsBlock = false;
    },
    openModal(f) {
      this.showNutritionInfoModal = !this.showNutritionInfoModal;
      this.modalInfoData = f;
    },
    closeModal() {
      this.showNutritionInfoModal = !this.showNutritionInfoModal;
      this.modalInfoData = null;
    },
    addFood(f) {
      const { foodItem, selected_portion: portion } = f;
      const isItemExist = this.savedFoodItems.some(
        (item) => item.id === foodItem.id
      );
      if (isItemExist) {
        /*
          When we already have item in sidebar, there is no need to add it again.
          Just open sidebar with already added items.
         */
        this.showNutritionSidebar = true;
        return;
      }
      foodItem.portion = portion;
      this.ADD_FOOD_ITEM(foodItem);
      this.showNutritionSidebar = true;
    },
    removeFood(foodItemId) {
      this.REMOVE_FOOD_ITEM(foodItemId);
    },
    ...mapMutations(["ADD_FOOD_ITEM", "REMOVE_FOOD_ITEM"]),
  },
};
</script>

<template>
  <div class="wrap" :class="{ 'is-sidebar': isSidebarVisible }">
    <div class="calculator">
      <div class="container">
        <h1 class="calculator-title">Food calorie calculator</h1>
        <search-form @search-food-event="searchFood" />
        <search-results
          :food-search-data="foodSearchData"
          @add-food-event="addFood"
          @open-modal-event="openModal"
        />
        <no-results v-if="showNoResultsBlock" />
      </div>
    </div>
    <calculate-sidebar
      v-if="isSidebarVisible"
      @close-sidebar-event="showNutritionSidebar = !showNutritionSidebar"
      @remove-food-event="removeFood"
    />
    <info-modal
      v-if="showNutritionInfoModal"
      :modal-info-data="modalInfoData"
      @close-modal-event="closeModal"
    />
  </div>
</template>
