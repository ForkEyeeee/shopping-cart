import { Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import FeaturedItems from "./components/FeaturedItems";
import Footer from "./components/Footer";
import { worker } from "./test/mocks/browser";

if (process.env.NODE_ENV === "development") {
  // worker.start();
}

function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <FeaturedItems />
      <Footer />
    </Box>
  );
}

export default App;
