import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const MenuAccordion = ({ title, count, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-2"
      >
        <h3 className="text-lg font-extrabold text-[#02060ceb]">
          {title} ({count})
        </h3>
        {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
      </button>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-8">
          {/* Sample Static Item */}
          <div className="flex justify-between items-start pb-8 border-b">
            <div className="w-2/3">
              <div className="w-4 h-4 border-2 border-green-600 flex justify-center items-center rounded-sm p-[2px] mb-1">
                <div className="w-full h-full bg-green-600 rounded-full"></div>
              </div>
              <h4 className="font-bold text-gray-700 text-lg">
                Veg Fried Rice
              </h4>
              <p className="font-bold text-sm">₹179</p>
              <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                Classic wok-tossed rice with fresh vegetables and subtle
                seasonings.
              </p>
            </div>
            <div className="relative w-32 h-32">
              <div className="bg-gray-200 w-full h-full rounded-xl"></div>
              <button className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold px-8 py-2 rounded-lg shadow-md border border-gray-200 hover:bg-gray-100 uppercase text-sm">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuAccordion;
