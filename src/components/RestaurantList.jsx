import RestaurantCard from "./RestaurantCard";

import RestaurantShimmerList from "./RestaurantShimmerList";
import useSwiggyData from "../hooks/useSwiggyData";

const RestaurantList = () => {
  const { restaurantList } = useSwiggyData();

  return (
    <div className="max-w-350 mx-auto my-5">
      <h1 className="mx-3 font-black text-xl lg:mx-5">
        Top restaurant chains in Chennai
      </h1>
      {restaurantList.length === 0 ? (
        <RestaurantShimmerList />
      ) : (
        <div className="flex flex-wrap sm:gap-5 py-6 px-3">
          {restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
