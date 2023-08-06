import { Box, Heading, Text } from "@chakra-ui/react";
import useDataFetching from "../hooks/fetchItemData";
import { useOutletContext } from "react-router-dom";
import Item from "./Item";

const Cart = () => {
  const { cartItems, data, handleAddCart, handleClearItems, itemQuantity } =
    useOutletContext();
  // const [data, loading, error] = useDataFetching(
  //   "https://fakestoreapi.com/products/category/electronics"
  // );
  let obj = [];
  console.log(cartItems);
  console.log(data);
  const itemIdArray = cartItems.map((a) => a.itemId);
  itemIdArray.forEach((element) => {
    const findElement = data.find((item) => item.id === element);
    findElement ? obj.push(findElement) : null;
  });

  data ? data.filter((item) => item.id === cartItems.id) : null;

  //i want to go through data and find anything that matches for cartItems. if it matches, i want the image for it
  // for(let i = 0; i <= data.length; i++) {

  // }

  return (
    <Box>
      <Heading>Shopping Cart</Heading>
      {obj.map((item) => (
        <Item
          key={item.id}
          itemId={item.id}
          image={item.image}
          title={item.title}
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
        </Item>
      ))}
    </Box>
  );
};

export default Cart;
