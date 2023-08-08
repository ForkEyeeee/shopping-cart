import { Box, Image, Flex, Heading, Text, Button } from "@chakra-ui/react";

const CartItem = ({ image, title, description, price, cartItems, itemId }) => {
  const count = cartItems.filter((cartItem) => cartItem.itemId === itemId)[0]
    .count;
  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m={4}
      alignItems={"center"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box p={4}>
        <Image
          borderRadius="md"
          boxSize="100px"
          objectFit="cover"
          src={image}
          alt={title}
        />
        <Text
          fontSize="sm"
          fontWeight="medium"
          p={1}
          bg="blue.50"
          borderRadius="sm"
        >
          Qty: {count}
        </Text>
      </Box>
      <Box p={4} flex="1">
        <Flex justify="space-between">
          <Box textAlign={"center"}>
            <Heading fontSize="xl">{title}</Heading>
            <Text mt={2} textAlign={"center"}>
              {description}
            </Text>
            <Text fontSize="xl">${price}</Text>
            <Button colorScheme="red" size="sm" mt={2} onClick={() => {}}>
              Remove
            </Button>
          </Box>
          <Box></Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CartItem;
