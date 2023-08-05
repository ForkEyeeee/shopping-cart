import { Box } from "@chakra-ui/react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import FeaturedItems from "./components/FeaturedItems";
function App() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <FeaturedItems />
    </Box>
  );
}

export default App;
