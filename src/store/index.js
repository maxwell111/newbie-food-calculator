import { createStore } from "vuex";
import * as mutations from "./mutations";
import * as getters from "./getters";
import Storage from "../services/storage";

const foodItemsStorage = Storage.getStorageItem("foodItems")
  ? Storage.getStorageItem("foodItems")
  : [];

const store = createStore({
  state() {
    return {
      foodItems: foodItemsStorage,
    };
  },
  mutations,
  getters,
});

export default store;
