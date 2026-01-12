import { BACKEND_URL } from "./constants";

export const fetchSwiggyData = async () => {
  const res = await fetch(`${BACKEND_URL}/restaurants`);
  return res.json();
};

export const fetchRestaurantMenu = async (resId) => {
  const res = await fetch(`${BACKEND_URL}/menu/${resId}`);
  return res.json();
};
