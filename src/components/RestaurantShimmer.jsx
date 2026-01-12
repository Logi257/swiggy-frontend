const RestaurantShimmer = () => {
  return (
    <div className="w-1/2 mb-5 sm:mb-2 sm:w-[320px] animate-pulse">
      {/* Image shimmer */}
      <div className="w-41.25 sm:w-full h-50 bg-gray-200 rounded-2xl" />

      {/* Text shimmer */}
      <div className="mt-3 px-3 space-y-2">
        <div className="h-4 w-3/4 bg-gray-200 rounded" />
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-1/3 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

export default RestaurantShimmer;
