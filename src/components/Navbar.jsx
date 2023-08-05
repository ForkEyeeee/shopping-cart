import { Box, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack justifyContent={"flex-end"} gap={5} pr={5} pb={3}>
      <Box>Home</Box>
      <Box>Cart</Box>
      <Box>About Us</Box>
    </HStack>
  );
};

export default Navbar;
