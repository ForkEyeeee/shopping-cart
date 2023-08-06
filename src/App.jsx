import { Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import FeaturedItems from "./components/ItemList";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { Outlet } from "react-router-dom";
import { worker } from "./test/mocks/browser";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Cart from "./components/Cart";
if (process.env.NODE_ENV === "development") {
  // worker.start();
}

function App() {
  const [itemCount, setItemCount] = useState([]);

  console.log(useLocation());
  return (
    <Box>
      <Navbar />
      <Hero />
      {/* <Cart itemCount={itemCount} setItemCount={setItemCount} /> */}
      {useLocation().pathname === "/" && (
        <FeaturedItems itemCount={itemCount} setItemCount={setItemCount} />
      )}
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
