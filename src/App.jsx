import { Route, Routes } from "react-router-dom";
import FoodCategory from "./components/FoodCategory";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import RestaurantMenu from "./components/RestaurantMenu";
import CheckOut from "./components/Checkout";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <FoodCategory />
              <RestaurantList />
            </>
          }
        />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
};

export default App;
