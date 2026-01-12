import { Link } from "react-router-dom";
import { IMG_API_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    id,
    name,
    cloudinaryImageId,
    avgRating,
    cuisines,
    locality,
    sla,
    aggregatedDiscountInfoV3,
  } = resData?.info || {};

  console.log(resData);
  // console.log(name);

  return (
    <div
      className="
  w-full 
  sm:w-1/2 
  lg:w-1/3 
  xl:w-1/4 
  p-2
  lg:mx-5
  transition-transform duration-200 ease-in-out 
  hover:scale-95 
  cursor-pointer
"
    >
      <Link to={`/restaurant/${id}`}>
        {/* Image Container */}
        <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden rounded-2xl">
          <img
            className="h-full w-full object-cover"
            src={IMG_API_URL + cloudinaryImageId}
            alt={name}
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
            <h1 className="text-white font-extrabold text-lg uppercase tracking-tight">
              {aggregatedDiscountInfoV3?.header || ""}{" "}
              {aggregatedDiscountInfoV3?.subHeader || ""}
            </h1>
          </div>
        </div>

        {/* Restaurant Details */}
        <div className="mt-3 px-2">
          <h3 className="font-bold text-lg text-[#02060ceb] truncate">
            {name}
          </h3>

          <div className="flex items-center gap-2 font-bold text-[#02060ceb] mt-1">
            <span className="bg-green-600 text-white rounded-full px-1 text-xs">
              ⭐ {avgRating}
            </span>
            <span className="text-sm">{sla?.slaString}</span>
          </div>

          <p className="text-[#02060c99] truncate font-medium text-sm mt-1">
            {cuisines?.join(", ")}
          </p>

          <p className="text-[#02060c99] font-medium text-sm">{locality}</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
