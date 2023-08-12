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
      direction={{ base: "column", md: "row" }}
      align={{ base: "center", sm: "start" }}
      maxW={{ xl: "900px" }}
      justifyContent={"space-between"}
    >
      <Box
        mb={{ base: 4, md: 0 }}
        display={"flex"}
        justifyContent={"center"}
        minW={{ base: "100%", md: "200px" }}
      >
        <Image
          borderRadius="md"
          boxSize="200px"
          objectFit="contain"
          src={image}
          alt={title}
          alignItems={"center"}
        />
      </Box>
      <Flex direction="column" ml={{ md: 4 }}>
        <Heading fontSize="xl" mb={2} textAlign={"center"}>
          {title}
        </Heading>
        <Text maxW={{ base: "250px", sm: "100%" }} textAlign={"center"}>
          {description}
        </Text>
        <Flex
          justify="flex-end"
          align="center"
          mt={4}
          minH={"100px"}
          alignItems={"flex-end"}
        >
          <Text fontSize="lg" fontWeight="bold" color={"green"} mr={4}>
            ${price}
          </Text>
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
      </Flex>
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
