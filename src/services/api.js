const APIurl =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/data/"
    : "https://gist.githubusercontent.com/maxwell111/03ddeb33c4435674bd4b0a917740e7b8/raw/f4b6bbc11632fdca12f0ddc07131c9323f0e3993/foodItems.json";

export async function getSingleFoodItem(id) {
  const response = await fetch(`${APIurl}?id=${id}`);
  return response.json();
}

export async function searchFoodItems(query) {
  const response = await fetch(`${APIurl}?q=${query}`);
  return response.json();
}
