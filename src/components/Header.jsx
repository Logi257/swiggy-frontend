import { RxCaretDown } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

const Header = () => {
  const { cartItem } = useContext(CartContext);
  console.log(cartItem);

  return (
    <>
      <header className="sticky top-0 z-100 bg-white p-4 shadow-md text-[#02060cb3]">
        <div className="max-w-300 mx-auto  flex items-center gap-5">
          <div className="w-12">
            <Link to="/">
              <img src={logo} alt="logo" className="w-full rounded-lg" />
            </Link>
          </div>
          <div className="hidden sm:block text-[14px]">
            <span className="font-bold  border-b-2 border-[black] text-black">
              Ramapuram
            </span>{" "}
            Chennai
            <RxCaretDown
              fontSize={27}
              className="inline text-[#fc8019] font-extrabold"
              strokeWidth={0.5}
            />
          </div>
          <nav className="ml-auto font-semibold text-[18px]">
            <ul className="flex gap-10">
              <li className="hidden sm:flex items-center gap-2 hover:text-[#fc8019]">
                <IoSearch />
                Search
              </li>
              <li className="hidden sm:flex items-center gap-2 hover:text-[#fc8019]">
                <BiSolidOffer />
                Offers
              </li>
              <li className="hidden sm:flex items-center gap-2 hover:text-[#fc8019]">
                <IoHelpBuoyOutline />
                Help
              </li>
              <Link to="/checkout">
                <li className="mr-2 sm:mr-0 relative flex items-center gap-2 hover:text-[#fc8019] cursor-pointer text-xl sm:text-lg">
                  <LuShoppingBag />

                  <span>Cart</span>
                  {cartItem.length > 0 && (
                    <sup className="absolute -top-2 -right-4 bg-[#fc8019] text-black w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full text-[10px] sm:text-xs font-bold">
                      {cartItem.length}
                    </sup>
                  )}
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
