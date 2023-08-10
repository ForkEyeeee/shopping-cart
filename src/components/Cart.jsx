import {
  Box,
  Heading,
  Text,
  Spinner,
  HStack,
  Center,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import CartItem from "./CartItem";
import PropTypes from "prop-types";

const Cart = ({
  data,
  loading,
  error,
  cartItems,
  handleAddCart,
  handleClearItems,
}) => {
  const toast = useToast();

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
    <Box className="wwad" height={"100vh"} overflow={"auto"} mt={20}>
      <Center>
        <Heading
          p={5}
          bgGradient="linear(to-r, blue.500, green.500)"
          bgClip="text"
          fontWeight="bold"
          letterSpacing="tight"
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
            cartItems.filter((cartItem) => cartItem.itemId === item.id)[0].count
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
          onClick={() =>
            toast({
              title: "Checked out.",
              description: "You've successfully checked out.",
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "top",
            })
          }
        >
          Checkout
        </Button>
      </Flex>
    </Box>
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
