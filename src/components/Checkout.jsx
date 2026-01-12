import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import { FOOD_IMG_URL } from "../utils/constants";

const Cart = () => {
  const { cartItem, clearCart, removeItemfromCart, addToCart } =
    useContext(CartContext);
  console.log(cartItem);

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="py-15">
      {cartItem.length > 0 ? (
        /* ================= CART WITH ITEMS ================= */
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Your Cart</h1>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-left  text-sm text-gray-500">
                  <th className="pb-3">Item</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3">Qty</th>
                  <th className="pb-3 text-right">Total</th>
                </tr>
              </thead>

              <tbody>
                {cartItem.map((item) => (
                  <tr key={item.id} className="border-b last:border-none">
                    <td className="py-4 flex items-center gap-4">
                      <img
                        src={FOOD_IMG_URL + item.imageId}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <span className="font-medium text-gray-800">
                        {item.name}
                      </span>
                    </td>

                    <td className="text-gray-700">₹{item.price}</td>
                    <td className="text-gray-700">
                      <button
                        onClick={() => removeItemfromCart(item.id)}
                        className="px-1 sm:px-2 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="p-2">{item.quantity}</span>

                      <button
                        onClick={() => addToCart(item)}
                        className="px-1 sm:px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </td>
                    <td className="text-right font-semibold text-gray-800">
                      ₹{item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE VIEW */}
          <div className="md:hidden space-y-4">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 border rounded-lg items-center"
              >
                {/* <img
                  src={FOOD_IMG_URL + item.imageId}
                  alt={item.name}
                  className="hidden w-20 h-20 rounded-lg object-cover"
                /> */}

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    ₹{item.price} × {item.quantity}
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => removeItemfromCart(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span className="font-medium">{item.quantity}</span>

                    <button
                      onClick={() => addToCart(item)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="font-semibold text-gray-800">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Total: ₹{totalPrice}
            </h2>

            <button
              onClick={clearCart}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold uppercase text-sm cursor-pointer"
            >
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        /* ================= EMPTY CART ================= */
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="flex flex-col items-center text-center max-w-md px-4">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              alt="Empty Cart"
              className="w-64 mb-6"
            />

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Your cart is empty
            </h2>

            <p className="text-sm font-semibold text-gray-500 mb-6">
              You can go to home page to view more restaurants
            </p>

            <Link to="/">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 uppercase text-sm tracking-wide cursor-pointer">
                See restaurants near you
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
