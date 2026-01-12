import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IMG_API_URL} from "../utils/constants";
import { useEffect, useState } from "react";
import CategoryShimmer from "./CategoryShimmer";
import useSwiggyData from "../hooks/useSwiggyData";

const FoodCategory = () => {
  const { categoriesList } = useSwiggyData();
  const [slide, setSlide] = useState(0);

  const isMobile = window.innerWidth < 640;
  const mobileVisibleCategory = isMobile
    ? categoriesList.slice(0, 8)
    : categoriesList;

  const totalItems = categoriesList.length;
  const visibleItem = 9;
  const maxSlide = totalItems - visibleItem;

  const nextSlide = () => {
    if (slide > maxSlide) return false;
    const nextValue = slide + 3;
    setSlide(nextValue < maxSlide ? nextValue : maxSlide);
  };

  const prevSlide = () => {
    if (slide < 0) return false;
    const prevValue = slide - 3;
    setSlide(prevValue < 0 ? 0 : prevValue);
  };

  return (
    <div className="max-w-350 mx-auto my-5">
      <div className="flex items-center gap-5 justify-between">
        <h1 className="mx-3 my-5 font-black text-xl">What's on your mind?</h1>
        <div className="flex">
          <div
            className="hidden sm:flex w-9 h-9 justify-center items-center bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="hidden sm:flex w-9 h-9 justify-center items-center bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap overflow-hidden border-b-2 border-[#02060c26] pb-5">
        {mobileVisibleCategory.length === 0 ? (
          <CategoryShimmer />
        ) : (
          mobileVisibleCategory.map((item) => (
            <div
              className="w-1/4 sm:w-38.5 shrink-0 transition-transform duration-500"
              style={{ transform: `translateX(-${slide * 100}%)` }}
              key={item.id}
            >
              <img
                src={IMG_API_URL + item.imageId}
                alt={item.accessibility?.altText || "category"}
                className="w-full h-full object-cover"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FoodCategory;
