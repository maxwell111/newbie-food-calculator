const APIurl = "http://localhost:3000/data/";

export async function getSingleFoodItem(id) {
  const response = await fetch(`${APIurl}?id=${id}`);
  return response.json();
}

export async function searchFoodItems(query) {
  const response = await fetch(`${APIurl}?q=${query}`);
  return response.json();
}
