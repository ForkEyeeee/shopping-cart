import { Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { BrowserRouter, Link, Outlet } from "react-router-dom";
// import { worker } from "./test/mocks/browser";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Cart from "./components/Cart";
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
  // console.log(useLocation());

  const itemQuantity = (itemId) => {
    const cartItem = cartItems.find((item) => item.itemId === itemId);
    if (cartItem !== undefined) {
      return cartItems.filter((item) => item.itemId === itemId)[0].count;
    }
  };

  // console.log(useLocation());
  return (
    <Box>
      <Navbar />
      <Hero />
      <Outlet
        context={{
          itemQuantity,
          cartItems,
          handleAddCart,
          handleClearItems,
          data,
          loading,
          error,
        }}
      />
      <Footer />
    </Box>
  );
};

export default App;
