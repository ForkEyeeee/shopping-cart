import { Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useDataFetching from "./hooks/fetchItemData";

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

  return (
    <Box>
      <Navbar />
      <Hero />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default App;
