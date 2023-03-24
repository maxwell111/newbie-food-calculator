<script>
export default {
  props: {
    foodSearchData: {
      type: Array,
      required: false,
      default: [],
    },
  },
  emits: ["addFoodEvent", "openModalEvent"],
  data() {
    return {
      portionSizes: [],
    };
  },
  methods: {
    addFoodEvent(foodItem, index) {
      // TODO: find another solution how to show additionalOptions block
      if (foodItem.hasOwnProperty("showAdditionalOptions")) {
        delete foodItem.showAdditionalOptions;
      }
      this.$emit("addFoodEvent", {
        foodItem,
        selected_portion: this.portionSizes[index],
      });
      this.portionSizes = [];
    },
    openPortionSizeBlock(foodItem) {
      foodItem.showAdditionalOptions = true;
    },
    openModalEvent(foodItem) {
      this.$emit("openModalEvent", foodItem);
    },
  },
};
</script>

<template>
  <div class="search-results">
    <div
      v-for="(f, index) in foodSearchData"
      :key="f.id"
      class="search-results-item results-item"
    >
      <div class="results-item-content">
        <div class="results-item-info item-info">
          <h3>
            {{ f.name }}
          </h3>
          <div class="item-info-portion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              version="1.1"
              width="800px"
              height="800px"
              viewBox="0 0 431.365 431.365"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M368.194,63.172C327.456,22.435,273.294,0,215.683,0c-33.376,0-65.588,7.545-94.709,21.801l9.006,17.961 c72.963-35.467,163.564-22.956,224.072,37.553c76.295,76.296,76.295,200.438,0,276.736 c-76.297,76.297-200.442,76.297-276.739,0.002c-60.507-60.51-73.018-151.106-37.55-224.071l-17.961-9.007 c-14.256,29.121-21.8,61.332-21.801,94.708c0,57.61,22.435,111.773,63.171,152.51c40.737,40.738,94.899,63.172,152.511,63.172 c57.611,0,111.773-22.436,152.511-63.174c40.736-40.735,63.17-94.897,63.17-152.508 C431.364,158.072,408.931,103.91,368.194,63.172z"
                  />
                  <path
                    d="M65.665,142.97c-30.105,62.104-19.392,139.02,32.16,190.571c65.091,65.092,170.625,65.092,235.717,0 c65.09-65.091,65.09-170.625,0-235.717C281.989,46.273,205.074,35.56,142.97,65.665l77.757,155.063L65.665,142.97z"
                  />
                  <path
                    d="M93.122,15.819C76.81,23.725,61.517,34.438,47.977,47.978c-13.54,13.539-24.253,28.833-32.159,45.145l155.063,77.758 L93.122,15.819z"
                  />
                </g>
              </g>
            </svg>
            <span>
              {{ f.serving_size.amount }} {{ f.serving_size.measure }}
            </span>
          </div>
          <div class="item-info-portion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              version="1.1"
              viewBox="0 0 1125.628 1125.628"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M562.812,0.002C252.476,0.002,0,252.479,0,562.814s252.476,562.812,562.812,562.812 c310.34,0,562.817-252.476,562.817-562.812S873.152,0.002,562.812,0.002z M309.189,739.263l-68.974-101h-17.735v101h-70v-357h70 v203h15.889l57.901-93h77.963l-79.808,111.736l92.036,135.264H309.189z M468.184,672.88c7.299,13.589,20.325,20.382,38.317,20.382 c11.995,0,21.792-3.329,29.023-10.286c7.226-6.952,11.026-14.712,11.026-27.712h61.131l0.69,1.237 c0.612,25.224-8.88,46.258-28.489,63.246c-19.605,16.997-43.942,25.452-73.007,25.452c-37.218,0-65.962-11.781-86.11-35.309 c-20.144-23.529-30.283-53.763-30.283-90.671v-6.925c0-36.753,10.102-66.968,30.169-90.652 c20.071-23.68,48.745-35.524,85.958-35.524c30.76,0,55.57,8.766,74.412,26.297c18.833,17.531,27.954,41.73,27.342,70.334 l-0.453,2.516H546.55c0-14-3.54-24.775-10.611-33.312c-7.075-8.533-16.837-13.365-29.298-13.365 c-17.837,0-31.158,6.628-38.457,20.446c-7.308,13.818-11.703,31.349-11.703,53.151v6.911 C456.481,641.362,460.876,659.29,468.184,672.88z M793.142,739.263c-2.462-4-4.582-11.157-6.345-17.465 c-1.772-6.304-3.038-12.499-3.805-19.113c-6.925,12.15-16.033,22.354-27.338,30.348c-11.301,7.998-24.798,12.061-40.484,12.061 c-26.141,0-46.285-6.691-60.432-20.148c-14.151-13.457-21.222-31.78-21.222-54.998c0-24.456,9.414-43.221,28.256-56.683 c18.833-13.452,46.327-20.003,82.467-20.003h39.242v-20.18c0-11.995-3.974-21.3-10.282-27.914 c-6.303-6.609-16.019-9.917-28.32-9.917c-10.922,0-19.545,2.65-25.465,7.957c-5.92,5.303-8.982,12.648-8.982,22.026l-65.101-0.228 l-0.259-1.384c-1.073-21.066,8.063-39.251,27.44-54.553c19.377-15.302,44.822-22.953,76.349-22.953 c29.832,0,54.075,7.578,72.684,22.72c18.605,15.151,27.938,36.716,27.938,64.703v103.113c0,11.689,0.854,22.156,2.622,32.461 c1.768,10.3,4.55,21.149,8.396,30.149H793.142z M902.481,739.263v-357h70v357H902.481z"
                />
                <path
                  d="M711.712,640.846c-7.382,7.153-11.072,16.229-11.072,26.379c0,8.304,2.768,15.211,8.304,20.285 c5.536,5.075,13.069,7.717,22.606,7.717c11.84,0,23.195-2.865,32.422-8.707c9.227-5.847,14.509-12.558,19.509-20.246v-37.012 h-39.242C729.933,629.263,719.093,633.698,711.712,640.846z"
                />
              </g>
            </svg>
            <span>
              {{ f.nutrition_data.calories }}
            </span>
          </div>
        </div>
        <div class="results-item-actions">
          <button
            class="results-item-button button button-colored-invert"
            @click="openModalEvent(f)"
          >
            Show nutrition info
          </button>
          <button
            class="results-item-button button button-colored"
            @click="openPortionSizeBlock(f)"
          >
            Select portion size
          </button>
        </div>
      </div>
      <div
        v-if="f.showAdditionalOptions"
        class="results-item-options item-options"
      >
        <input
          v-model="portionSizes[index]"
          :placeholder="f.serving_size.amount"
          class="form-input"
        />
        <span class="item-options-measure">{{ f.serving_size.measure }}</span>
        <button
          class="item-options-button button button-colored"
          @click="addFoodEvent(f, index)"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>
