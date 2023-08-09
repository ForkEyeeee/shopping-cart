import { Box, filter } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import useDataFetching from "./hooks/fetchItemData";
import ItemList from "./components/HomeItemList";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import { useLocation } from "react-router-dom";
import HomeItemList from "./components/HomeItemList";

if (process.env.NODE_ENV === "development") {
  // worker.start();
}

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [data, loading, error] = useDataFetching(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const location = useLocation();

  useEffect(() => {
    const getItems = localStorage.getItem("cartId");
    setCartItems(JSON.parse(getItems));
  }, []);

  useEffect(() => {
    if (cartItems.length > 0)
      localStorage.setItem("cartId", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (!data) return;
    let filteredCartItems = [];
    const filterCart = () => {
      for (let i = 0; i < cartItems.length; i++) {
        filteredCartItems.push(
          data.find((item) => item.id === cartItems[i].itemId)
        );
      }
    };
    filterCart();
    const result = filteredCartItems.reduce((acc, obj) => {
      return (
        acc + obj.price * cartItems.find((item) => item.itemId === obj.id).count
      );
    }, 0);
    setTotalPrice(result);
    console.log(totalPrice);
    return () => {};
  }, [cartItems, data, totalPrice]);

  useEffect(() => {
    const result = cartItems.reduce((acc, obj) => {
      return acc + obj.count;
    }, 0);
    setTotalItems(result);

    return () => {};
  }, [cartItems]);

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
      <Navbar totalItems={totalItems} totalPrice={totalPrice} />
      {location.pathname === "/" && <Hero />}
      <Routes>
        <Route
          path="/"
          element={
            <HomeItemList
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
