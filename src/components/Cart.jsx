import { Box, Heading, Text } from "@chakra-ui/react";
import CartItem from "./CartItem";
const Cart = ({ data, cartItems }) => {
  console.log(cartItems);
  console.log(data);
  let filteredCartItems = [];
  const filterCart = () => {
    for (let i = 0; i < cartItems.length; i++) {
      filteredCartItems.push(
        data.find((item) => item.id === cartItems[i].itemId)
      );
    }
  };
  data && filterCart();
  // const itemIdArray = cartItems.map((a) => a.itemId);
  // itemIdArray.forEach((element) => {
  //   const findElement = data.find((item) => item.id === element);
  //   findElement ? obj.push(findElement) : null;
  // });
  // data ? data.filter((item) => item.id === cartItems.id) : null;
  console.log(filteredCartItems);
  // i want to go through data and find anything that matches for cartItems. if it matches, i want the image for it
  // for(let i = 0; i <= data.length; i++) {
  // }
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

          // handleAddCart={handleAddCart}
          // handleClearItems={handleClearItems}
          // itemQuantity={itemQuantity}
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

export default Cart;
