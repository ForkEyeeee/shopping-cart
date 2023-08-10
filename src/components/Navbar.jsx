import { Box, HStack, Badge, Text, Image } from "@chakra-ui/react"; // Import Text
import LinkWrapper from "./LinkWrapper";
import { FaHome, FaShoppingCart, FaInfoCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const NavBar = ({ totalItems, totalPrice }) => {
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
      <HStack justifyContent={"space-between"}>
        <Box boxSize={10} display={{ base: "none", sm: "block" }}>
          <Image src={"src/assets/navbar-logo.png"} alt={"navbar logo"} />
        </Box>
        <LinkWrapper to="/AboutUs" icon={FaInfoCircle} label="About" />

        <LinkWrapper to="/" icon={FaHome} label="Home" />
        <HStack spacing={1}>
          <LinkWrapper to="/Cart" icon={FaShoppingCart} label="Cart" />
          <Badge colorScheme="red" fontSize="0.8em">
            {totalItems}
          </Badge>
          <Text fontSize="1em" fontWeight="bold">
            ${totalPrice.toFixed(0)}
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

NavBar.propTypes = {
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number,
};

export default NavBar;
