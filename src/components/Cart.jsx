import {
  Box,
  Heading,
  Text,
  Spinner,
  HStack,
  Center,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import PropTypes from "prop-types";
import EmptyCart from "./EmptyCart";

const Cart = ({
  data,
  loading,
  error,
  cartItems,
  handleAddCart,
  handleClearItems,
  handleCheckout,
}) => {
  let filteredCartItems = [];
  console.log(data);
  const filterCart = () => {
    for (let i = 0; i < cartItems.length; i++) {
      filteredCartItems.push(
        data.find((item) => item.id === cartItems[i].itemId)
      );
    }
  };
  data && filterCart();

  if (loading)
    return (
      <Center p={10} mt={50}>
        <HStack spacing={5}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Text>Loading...</Text>
        </HStack>
      </Center>
    );
  if (error) return <Text data-testid="error-message">Oops</Text>;

  return (
    <>
      <Box overflow={"auto"} mt={20}>
        <Center alignContent={"flex-start"}>
          <Heading
            conditoanlylrndermemptyacartt
            p={5}
            bgGradient="linear(to-r, blue.500, green.500)"
            bgClip="text"
            fontWeight="bold"
            letterSpacing="tight"
            display={cartItems.length > 0 ? "block" : "none"}
          >
            Shopping Cart
          </Heading>
        </Center>
        {filteredCartItems.map((item) => (
          <CartItem
            key={item.id}
            itemId={item.id}
            image={item.image}
            title={item.title}
            count={
              cartItems.filter((cartItem) => cartItem.itemId === item.id)[0]
                .count
            }
            description={item.description}
            price={item.price}
            handleAddCart={handleAddCart}
            handleClearItems={handleClearItems}
          >
            <Text p={5} fontWeight={"semibold"} fontSize={"lg"}>
              {item.title}
            </Text>
            <Text
              textAlign={"end"}
              color={"green"}
              fontWeight={"bold"}
              fontSize={32}
            >
              ${item.price}
            </Text>
          </CartItem>
        ))}
        <Flex justifyContent="center" position="relative" top="-2">
          <Button
            colorScheme="whatsapp"
            variant="solid"
            size={"lg"}
            display={cartItems.length > 0 ? "block" : "none"}
            onClick={() => handleCheckout()}
          >
            Checkout
          </Button>
        </Flex>
      </Box>
      {cartItems.length === 0 && !loading && <EmptyCart />}
    </>
  );
};

Cart.propTypes = {
  data: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  cartItems: PropTypes.array,
  handleAddCart: PropTypes.func.isRequired,
  handleClearItems: PropTypes.func.isRequired,
};

export default Cart;
