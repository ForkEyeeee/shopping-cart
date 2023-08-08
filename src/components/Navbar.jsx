import { Box, HStack } from "@chakra-ui/react";
import LinkWrapper from "./LinkWrapper";
import { FaHome, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <Box
      bgGradient={"linear(to-r, blue.400, blue.600)"}
      p={3}
      color="white"
      shadow="lg"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <HStack
        justifyContent={{ base: "flex-end", md: "space-around" }}
        spacing={3}
      >
        <LinkWrapper to="/" icon={FaHome} label="Home" />
        <LinkWrapper to="/Cart" icon={FaShoppingCart} label="Cart" />
        <LinkWrapper to="/AboutUs" icon={FaInfoCircle} label="About" />
      </HStack>
    </Box>
  );
};

export default NavBar;
