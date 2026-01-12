import RestaurantShimmer from "./RestaurantShimmer";

const RestaurantShimmerList = () => {
  return (
    <div className="flex flex-wrap sm:gap-5 py-6 px-3">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <RestaurantShimmer key={index} />
        ))}
    </div>
  );
};

export default RestaurantShimmerList;
