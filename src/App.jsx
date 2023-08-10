import { Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import useDataFetching from "./hooks/fetchItemData";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomeItemList from "./components/HomeItemList";
import EmptyCart from "./components/EmptyCart";

if (process.env.NODE_ENV === "development") {
  // worker.start();
}

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [data, loading, error] = useDataFetching(
    "https://fakestoreapi.com/products/"
  );
  const location = useLocation();
  console.log(data);
  useEffect(() => {
    //set cartItems and set totalPrice on initial mount
    const localCartItems = localStorage.getItem("cartItems");
    const localTotalPrice = localStorage.getItem("totalPrice");
    if (localCartItems !== null) {
      setCartItems(JSON.parse(localCartItems));
      setTotalPrice(JSON.parse(localTotalPrice));
    }
  }, []);

  useEffect(() => {
    //if we have cartItems, then add them to local storage whenever cartItems or totalPrice state changes
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    }
  }, [cartItems, totalPrice]);

  useEffect(() => {
    // calculate and set the total price, whenever cartItems, data, or totalPrice changes
    if (!data) return;
    const filterCart = () => {
      const filteredCartItems = [];
      for (let i = 0; i < cartItems.length; i++) {
        filteredCartItems.push(
          data.find((item) => item.id === cartItems[i].itemId)
        );
      }
      return filteredCartItems;
    };
    console.log(filterCart());
    const newTotalPrice = filterCart().reduce((acc, currItem) => {
      return (
        acc +
        currItem.price *
          cartItems.find((item) => item.itemId === currItem.id).count
      );
    }, 0);
    setTotalPrice(newTotalPrice);
    localStorage.setItem("totalPrice", JSON.stringify(newTotalPrice));
  }, [cartItems, data, totalPrice]);

  useEffect(() => {
    //calc totalitems when cartItems changes
    const result = cartItems.reduce((acc, obj) => {
      return acc + obj.count;
    }, 0);
    setTotalItems(result);

    return () => {};
  }, [cartItems]);

  const handleAddCart = (e, itemId) => {
    if (e === "0") {
      const localStorageItem = JSON.parse(localStorage.getItem("cartItems"));
      const filteredLocalStorageItem = localStorageItem.filter(
        (item) => item.itemId !== itemId
      );
      localStorage.setItem(
        "cartItems",
        JSON.stringify(filteredLocalStorageItem)
      );
      setCartItems(filteredLocalStorageItem);
    }

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
    const currentItem = cartItems.find((item) => item.itemId === itemId);
    const filteredCartItems = cartItems.filter(
      (item) => item.itemId !== itemId
    );

    if (currentItem !== undefined) {
      setCartItems(filteredCartItems);
      localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
    }
    return;
  };

  const itemQuantity = (itemId) => {
    const cartItem = cartItems.find((item) => item.itemId === itemId);
    if (cartItem !== undefined) {
      const cartItemCount = cartItems.filter(
        (item) => item.itemId === itemId
      )[0].count;
      return cartItemCount;
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
        {console.log(cartItems.length > 0)}

        <Route
          path="/Cart"
          element={
            <Cart
              handleAddCart={handleAddCart}
              handleClearItems={handleClearItems}
              itemQuantity={itemQuantity}
              data={data}
              loading={loading}
              error={error}
              cartItems={cartItems}
            />
          }
        />
      </Routes>
      {cartItems.length === 0 && !loading && location.pathname !== "/" && (
        <EmptyCart />
      )}
      {!loading && <Footer />}
    </Box>
  );
};

export default App;
