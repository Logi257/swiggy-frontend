const RestaurantMenuShimmer = () => {
  return (
    <div className="max-w-200 mx-auto pt-8 px-4 pb-20 animate-pulse">
      {/* Breadcrumb */}
      <div className="h-3 w-40 bg-gray-200 rounded mb-8"></div>

      {/* Restaurant Name */}
      <div className="h-8 w-64 bg-gray-200 rounded mb-6"></div>

      {/* Restaurant Info Card */}
      <div className="border border-gray-200 rounded-[20px] p-4 mb-8">
        <div className="h-5 w-52 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 w-40 bg-gray-200 rounded mb-4"></div>

        <div className="space-y-3">
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>

     

      {/* Accordion Shimmer */}
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <div className="flex justify-between items-center">
            <div className="h-5 w-48 bg-gray-200 rounded"></div>
            <div className="h-5 w-5 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuShimmer;
