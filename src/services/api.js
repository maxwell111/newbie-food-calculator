const APIurl =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/data/"
    : "https://my-json-server.typicode.com/maxwell111/newbie-food-calculator/data";

export async function getSingleFoodItem(id) {
  const response = await fetch(`${APIurl}?id=${id}`);
  return response.json();
}

export async function searchFoodItems(query) {
  const response = await fetch(`${APIurl}?q=${query}`);
  return response.json();
}
