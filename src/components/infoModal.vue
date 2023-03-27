<script>
import CloseButton from "./buttons/closeButton.vue";
export default {
  name: "NutritionInfoModal",
  components: {
    CloseButton,
  },
  props: {
    modalInfoData: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
  },
  emits: ["closeModalEvent"],
  methods: {
    closeModal() {
      this.$emit("closeModalEvent");
    },
  },
};
</script>

<template>
  <div class="info-modal modal">
    <div class="info-modal-wrap modal-wrap">
      <close-button class="info-modal-close modal-close" @click="closeModal" />
      <h2 class="info-modal-title">
        Nutrition facts - {{ modalInfoData.name }}
      </h2>
      <div class="info-modal-content modal-content">
        <div class="info-modal-image">
          <img :src="modalInfoData.image" :alt="modalInfoData.name" />
        </div>
        <div class="info-modal-table modal-table">
          <div
            v-for="(value, key) in modalInfoData.nutrition_data"
            :key="key"
            class="modal-table-row"
          >
            <div class="modal-table-item capitalize">{{ key }}</div>
            <div class="modal-table-item">{{ value }} g</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
