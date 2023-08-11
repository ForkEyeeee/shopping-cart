import { Box, Heading, Text, Button, Center } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    <Box
      position="relative"
      h={{ base: "300px", sm: "400px", "2xl": "600px" }}
      backgroundImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('src/assets/hero-image.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Center
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="100%"
        flexDirection="column"
      >
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} color="white">
          Buy it all here
        </Heading>
        <Text color="white" mt={2}>
          50% off your first purchase
        </Text>
        <Link smooth to="#itemList">
          <Button
            mt={4}
            colorScheme="gray"
            variant="solid"
            _hover={{
              bgColor: "gray.700",
              borderColor: "gray.700",
              color: "white",
            }}
          >
            Start Shopping
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default Hero;
