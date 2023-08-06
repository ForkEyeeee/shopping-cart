import { Box, Heading } from "@chakra-ui/react";
import useDataFetching from "../hooks/fetchItemData";

const Cart = ({ itemCount, setItemCount }) => {
  const [data, loading, error] = useDataFetching(
    "https://fakestoreapi.com/products/category/electronics"
  );

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
