import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  NumberInput,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const CartItem = ({
  image,
  title,
  description,
  price,
  count,
  itemId,
  handleAddCart,
  handleClearItems,
}) => {
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
            <Button
              colorScheme="red"
              size="sm"
              mt={2}
              onClick={() => {
                handleClearItems(itemId);
              }}
            >
              Remove
            </Button>
            <NumberInput
              float={"right"}
              size="md"
              maxW={24}
              defaultValue={1}
              value={count}
              min={1}
              onChange={(e) => {
                handleAddCart(e, itemId);
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box></Box>
        </Flex>
      </Box>
    </Flex>
  );
};

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  itemId: PropTypes.number.isRequired,
  handleAddCart: PropTypes.func.isRequired,
  handleClearItems: PropTypes.func.isRequired,
};

export default CartItem;
