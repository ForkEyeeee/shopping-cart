import { Box, Heading, Text } from "@chakra-ui/react";
import CartItem from "./CartItem";
import PropTypes from "prop-types";

const Cart = ({ data, cartItems }) => {
  let filteredCartItems = [];

  const filterCart = () => {
    for (let i = 0; i < cartItems.length; i++) {
      filteredCartItems.push(
        data.find((item) => item.id === cartItems[i].itemId)
      );
    }
  };
  data && filterCart();

  return (
    <Box>
      <Heading>Shopping Cart</Heading>
      {filteredCartItems.map((item) => (
        <CartItem
          key={item.id}
          itemId={item.id}
          image={item.image}
          title={item.title}
          cartItems={cartItems}
          description={item.description}
          price={item.price}
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
    </Box>
  );
};

Cart.propTypes = {
  data: PropTypes.array,
  cartItems: PropTypes.array,
};

export default Cart;
