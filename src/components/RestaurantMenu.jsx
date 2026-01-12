import { IoStar } from "react-icons/io5";
import MenuAccordion from "./MenuAccordion";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { resId } = useParams();
  const { restaurantInfo, filteredCategories, menuList } =
    useRestaurantMenu(resId);

  if (!menuList) {
    return <RestaurantMenuShimmer />;
  }
  return (
    <div className="max-w-200 mx-auto pt-8 px-4 pb-20">
      <p className="text-[12px] text-gray-400 cursor-pointer mb-8">
        <Link to="/">Home</Link> /{" "}
        <span className="text-gray-800 font-semibold">
          {restaurantInfo?.name}
        </span>
      </p>

      <h1 className="font-bold text-[28px] ml-4 mb-4">
        {restaurantInfo?.name}
      </h1>
      <div className="border border-gray-200 rounded-[20px] p-4 shadow-sm mb-8">
        <div className="flex items-center gap-1 font-bold text-lg">
          <IoStar className="text-green-700" />
          <span>
            {restaurantInfo?.avgRating} {restaurantInfo?.totalRatingsString} •{" "}
            {restaurantInfo?.costForTwoMessage}
          </span>
        </div>
        <p className="text-orange-600 font-bold text-sm underline cursor-pointer mb-2">
          {restaurantInfo?.cuisines?.join(", ")}
        </p>

        <div className="flex flex-col gap-2 border-l-2 border-gray-200 ml-2 pl-4 py-2 relative">
          <div className="absolute w-2 h-2 bg-gray-300 rounded-full -left-[5px] top-0"></div>
          <div className="absolute w-2 h-2 bg-gray-300 rounded-full -left-[5px] bottom-0"></div>

          <p className="text-sm font-bold">
            Outlet{" "}
            <span className="text-gray-500 font-medium">
              {restaurantInfo?.areaName}
            </span>
          </p>
          <p className="text-sm font-bold lowercase">
            {restaurantInfo?.sla?.slaString}
          </p>
        </div>
      </div>
      <hr className="text-[#02060C1A]" />

      {filteredCategories?.map((menu, index) => (
        <MenuAccordion
          key={menu.card.card.title}
          title={menu.card.card.title}
          itemList={menu.card.card.itemCards}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex((prev) => (prev === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
