import { HStack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack justifyContent={"flex-end"} gap={5} pr={5} pb={3}>
      <ChakraLink as={ReactRouterLink} to="/">
        Home
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/Cart">
        Cart
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/AboutUs">
        About Us
      </ChakraLink>
    </HStack>
  );
};

export default NavBar;
