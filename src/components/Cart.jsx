import { Box, Heading } from "@chakra-ui/react";
import useDataFetching from "../hooks/fetchItemData";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useOutletContext();
  // const [data, loading, error] = useDataFetching(
  //   "https://fakestoreapi.com/products/category/electronics"
  // );

  console.log(cartItems);

  // data.find((item) => item.)

  // for(let i = 0; i <= data.length; i++) {

  // }

  return (
    <Box>
      <Heading>Shopping Cart</Heading>
    </Box>
  );
};

export default Cart;
