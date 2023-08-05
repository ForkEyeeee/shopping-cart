import { Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import FeaturedItems from "./components/FeaturedItems";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import { Outlet } from "react-router-dom";
import { worker } from "./test/mocks/browser";
import { useLocation } from "react-router-dom";

if (process.env.NODE_ENV === "development") {
  // worker.start();
}

function App() {
  console.log(useLocation());
  return (
    <Box>
      <Navbar />
      <Hero />
      {useLocation().pathname === "/" && <FeaturedItems />}
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
