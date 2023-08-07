import { Box, Heading, Text } from "@chakra-ui/react";
import CartItem from "./CartItem";
const Cart = ({
  data,
  cartItems,
  handleAddCart,
  handleClearItems,
  itemQuantity,
}) => {
  let obj = [];
  console.log(cartItems);
  console.log(data);
  const itemIdArray = cartItems.map((a) => a.itemId);
  itemIdArray.forEach((element) => {
    const findElement = data.find((item) => item.id === element);
    findElement ? obj.push(findElement) : null;
  });

  // data ? data.filter((item) => item.id === cartItems.id) : null;
  console.log(obj);
  // i want to go through data and find anything that matches for cartItems. if it matches, i want the image for it
  // for(let i = 0; i <= data.length; i++) {

  // }
  return (
    <Box>
      <Heading>Shopping Cart</Heading>
      {obj.map((item) => (
        <CartItem
          key={item.id}
          itemId={item.id}
          image={item.image}
          title={item.title}
          cartItems={cartItems}
          description={item.description}
          price={item.price}
          handleAddCart={handleAddCart}
          handleClearItems={handleClearItems}
          itemQuantity={itemQuantity}
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
