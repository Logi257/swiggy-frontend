import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FOOD_IMG_URL } from "../utils/constants";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const MenuAccordion = ({ title, itemList, isOpen, onToggle }) => {
  const { addToCart } = useContext(CartContext);
  if (!itemList || itemList.length === 0) return null;

  return (
    <div className="py-4 border-b-10 border-gray-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-2 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-lg font-extrabold text-[#02060ceb]">
          {title} ({itemList?.length})
        </h3>
        {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
      </button>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-8">
          {itemList?.map((item) => {
            const info = item?.card?.info;

            return (
              <div
                key={info.id}
                className="flex justify-between items-start pb-8 border-b last:border-b-0"
              >
                <div className="w-2/3">
                  {info.isVeg == 1 ? (
                    <div className="w-4 h-4 border-2 border-green-600 flex justify-center items-center rounded-sm p-[2px] mb-1">
                      <div className="w-full h-full bg-green-600 rounded-full"></div>
                    </div>
                  ) : (
                    <div className="w-4 h-4 border-2 border-red-600 flex justify-center items-center rounded-sm p-[2px] mb-1">
                      <div className="w-full h-full bg-red-600 rounded-full"></div>
                    </div>
                  )}

                  <h4 className="font-bold text-gray-700 text-lg">
                    {info?.name}
                  </h4>
                  <p className="font-bold text-sm">
                    ₹{info?.price / 100 || info?.defaultPrice / 100}
                  </p>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {info?.description}
                  </p>
                </div>
                <div className="relative w-34 h-32">
                  <img
                    src={FOOD_IMG_URL + info?.imageId}
                    className="w-full h-35 object-cover rounded-xl"
                    alt={info?.name}
                  />

                  <button
                    onClick={() => {
                      addToCart({
                        id: info.id,
                        name: info.name,
                        price: (info.price || info.defaultPrice) / 100,
                        imageId: info.imageId,
                      });
                    }}
                    className="absolute -bottom-2 left-1/2 cursor-pointer -translate-x-1/2 bg-white text-green-600 font-bold px-8 py-2 rounded-lg shadow-md border border-gray-200 hover:bg-gray-100 uppercase text-sm"
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MenuAccordion;
