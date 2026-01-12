import { useEffect, useState } from "react";

import { fetchRestaurantMenu } from "../utils/api";

const useRestaurantMenu = (resId) => {
  const [menuList, setMenuList] = useState(null);

  const fetchMenu = async () => {
    try {
      const data = await fetchRestaurantMenu(resId);

      setMenuList(data);
    } catch (err) {
      console.log("Error Fetching menu: ", err);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const restaurantInfo = menuList?.data?.cards[2]?.card?.card?.info;

  const categories =
    menuList?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filteredCategories = categories?.filter((category) => {
    const type = category?.card?.card?.["@type"];

    return (
      type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      type ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });

  return {
    restaurantInfo,
    filteredCategories,
    menuList,
  };
};

export default useRestaurantMenu;
