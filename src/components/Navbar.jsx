import { Box, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const NavBar = () => {
  return (
    <Box
      bgGradient="linear(to-r, blue.400, blue.600)"
      p={3}
      color="white"
      shadow="lg"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <HStack justifyContent={"flex-end"} spacing={3}>
        <ChakraLinkWrapper to="/" icon={FaHome} label="Home" />
        <ChakraLinkWrapper to="/Cart" icon={FaShoppingCart} label="Cart" />
        <ChakraLinkWrapper to="/AboutUs" icon={FaInfoCircle} label="About" />
      </HStack>
    </Box>
  );
};

const ChakraLinkWrapper = ({ to, icon, label }) => {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={to}
      px={2}
      py={1}
      borderRadius="full"
      transition="all 0.3s"
      _hover={{
        transform: "scale(1.05)",
        bg: "blue.700",
        textDecoration: "none",
      }}
      _active={{
        transform: "scale(0.95)",
      }}
      display="flex"
      alignItems="center"
    >
      {icon && <Box as={icon} mr={1} boxSize="16px" />}
      <Text fontSize="sm" fontWeight="semibold">
        {label}
      </Text>
    </ChakraLink>
  );
};

export default NavBar;
