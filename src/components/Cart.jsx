import {
  Box,
  Heading,
  Text,
  Spinner,
  HStack,
  Center,
  Button,
  Flex,
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
  const filterCart = () => {
    const filteredCartItems = [];
    for (let i = 0; i < cartItems.length; i++) {
      filteredCartItems.push(
        data.find((item) => item.id === cartItems[i].itemId)
      );
    }
    return filteredCartItems;
  };

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
      <Box
        overflow={"auto"}
        minH={
          cartItems !== undefined ? (cartItems.length > 0 ? "100vh" : "") : ""
        }
        mt={20}
        display={{ xl: "flex" }}
        flexDir={{ xl: "column" }}
        alignItems={{ xl: "center" }}
      >
        <Center alignContent={"flex-start"}>
          <Heading
            p={5}
            bgGradient="linear(to-r, blue.500, green.500)"
            bgClip="text"
            fontWeight="bold"
            letterSpacing="tight"
            display={
              cartItems !== undefined
                ? cartItems.length > 0
                  ? "block"
                  : "none"
                : "none"
            }
          >
            Shopping Cart
          </Heading>
        </Center>
        {data &&
          filterCart().map((item) => (
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
        <Flex justifyContent="flex-end" position="relative" top="-2" mr={4}>
          <Button
            colorScheme="whatsapp"
            variant="solid"
            size={"lg"}
            display={
              cartItems !== undefined
                ? cartItems.length > 0
                  ? "block"
                  : "none"
                : "none"
            }
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
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  loading: PropTypes.bool.isRequired,
  cartItems: PropTypes.array,
  handleAddCart: PropTypes.func.isRequired,
  handleClearItems: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired,
};

export default Cart;
