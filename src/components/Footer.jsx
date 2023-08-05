import { Box, Stack, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12px"
      bg={"tomato"}
      px={{ base: "4", md: "8" }}
    >
      <Text fontSize="sm" align="center" color={"white"} fontWeight={"bold"}>
        &copy; {new Date().getFullYear()} Shopping Cart Project. All rights
        reserved.
      </Text>
      <VStack
        direction="row"
        spacing="4"
        align="center"
        justify="center"
        pt={5}
      >
        <Text color={"white"}>Terms and Conditions</Text>
        <Text color={"white"}>Privacy Policy</Text>
        <Text color={"white"}>Contact Us</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
