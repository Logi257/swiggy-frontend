import { useEffect, useState } from "react";
import { fetchSwiggyData } from "../utils/api";

const useSwiggyData = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);

  const fetchData = async () => {
    try {
      

      const data = await fetchSwiggyData();
      const categories = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      const restaurant =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setCategoriesList(categories);
      setRestaurantList(restaurant);
    } catch (err) {
      console.log("Backend API Error", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { categoriesList, restaurantList };
};

export default useSwiggyData;
