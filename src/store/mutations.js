import Storage from "../services/storage";

export const ADD_FOOD_ITEM = (state, item) => {
  state.foodItems.push(item);
  Storage.setStorageItem("foodItems", state.foodItems);
};

export const REMOVE_FOOD_ITEM = (state, itemId) => {
  state.foodItems = state.foodItems.filter((i) => i.id !== itemId);
  Storage.setStorageItem("foodItems", state.foodItems);
};
