import { Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useState } from "react";
import useDataFetching from "./hooks/fetchItemData";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import { useLocation } from "react-router-dom";

if (process.env.NODE_ENV === "development") {
  // worker.start();
}

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const [data, loading, error] = useDataFetching(
    "https://fakestoreapi.com/products/category/electronics"
  );

  const handleAddCart = (e, itemId) => {
    if (cartItems.find((item) => item.itemId === itemId) !== undefined) {
      setCartItems((prevState) =>
        prevState.map((item) =>
          item.itemId === itemId ? { ...item, count: Number(e) } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { itemId, count: Number(e) }]);
    }
    return;
  };

  const handleClearItems = (itemId) => {
    if (cartItems.find((item) => item.itemId === itemId) !== undefined) {
      setCartItems((prevState) =>
        prevState.filter((prevItem) => prevItem.itemId !== itemId)
      );
    }
    return;
  };

  const itemQuantity = (itemId) => {
    const cartItem = cartItems.find((item) => item.itemId === itemId);
    if (cartItem !== undefined) {
      return cartItems.filter((item) => item.itemId === itemId)[0].count;
    }
  };

  const location = useLocation();

  return (
    <Box>
      <Navbar />
      {location.pathname === "/" && <Hero />}
      <Routes>
        <Route
          path="/"
          element={
            <ItemList
              handleAddCart={handleAddCart}
              handleClearItems={handleClearItems}
              itemQuantity={itemQuantity}
              data={data}
              loading={loading}
              error={error}
            />
          }
        />
        <Route
          path="/Cart"
          element={
            <Cart
              handleAddCart={handleAddCart}
              handleClearItems={handleClearItems}
              itemQuantity={itemQuantity}
              data={data}
              cartItems={cartItems}
            />
          }
        />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
