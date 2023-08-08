import { Box, Image, Flex, Heading, Text, Button } from "@chakra-ui/react";

const CartItem = ({ image, title, description, price, cartItems, itemId }) => {
  const count = cartItems.filter((cartItem) => cartItem.itemId === itemId)[0]
    .count;
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
      <Flex>
        <Box p={4}>
          <Image
            borderRadius="md"
            boxSize="100px"
            objectFit="cover"
            src={image}
            alt={title}
          />
          <Text>{count}</Text>
        </Box>
        <Box p={4} flex="1">
          <Flex justify="space-between">
            <Box>
              <Heading fontSize="xl">{title}</Heading>
              <Text mt={2} noOfLines={1}>
                {description}
              </Text>
            </Box>
            <Box>
              <Text fontSize="xl">${price}</Text>
              <Button colorScheme="red" size="sm" mt={2} onClick={() => {}}>
                Remove
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CartItem;
