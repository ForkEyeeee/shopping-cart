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
      boxShadow="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m={4}
      p={4}
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      spaceBetween
    >
      <Box flexShrink={0}>
        <Image
          borderRadius="md"
          boxSize="150px"
          objectFit="cover"
          src={image}
          alt={title}
          mb={{ base: 4, md: 0 }}
        />
      </Box>

      <Box ml={{ md: 6 }}>
        <Heading fontSize="xl" mb={2}>
          {title}
        </Heading>
        <Text>{description}</Text>
        <Text fontSize="lg" fontWeight="bold" my={2}>
          ${price}
        </Text>

        <Flex align="center" mt={2}>
          <Button
            colorScheme="red"
            size="sm"
            onClick={() => handleClearItems(itemId)}
            mr={4}
          >
            Remove
          </Button>

          <NumberInput
            size="md"
            maxW={24}
            value={count}
            min={1}
            onChange={(e) => handleAddCart(e, itemId)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
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
