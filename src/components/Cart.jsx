import { Box, Heading } from "@chakra-ui/react";

const Cart = ({ data, cartItems }) => {
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
    </Box>
  );
};

export default Cart;
