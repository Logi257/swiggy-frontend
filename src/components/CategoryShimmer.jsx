const CategoryShimmer = () => {
  return (
    <div className="max-w-300 mx-auto my-5 animate-pulse">
     

      {/* Category shimmer */}
      <div className="flex overflow-hidden">
        {Array(9)
          .fill("")
          .map((_, index) => (
            <div key={index} className="w-15.5 sm:w-38.5 shrink-0 px-2">
              <div className="w-full aspect-square bg-gray-200 rounded-full"></div>
             
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryShimmer;
