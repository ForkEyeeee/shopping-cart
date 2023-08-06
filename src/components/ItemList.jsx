import {
  Box,
  Grid,
  Image,
  Text,
  Heading,
  Spinner,
  Center,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import useDataFetching from "../hooks/fetchItemData";
import { useOutletContext } from "react-router-dom";

const ItemList = () => {
  const { itemQuantity, handleAddCart, handleClearItems } = useOutletContext();
  const [data, loading, error] = useDataFetching(
    "https://fakestoreapi.com/products/category/electronics"
  );

  if (loading)
    return (
      <Center p={10}>
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
  if (error) return <Text>{error.message + " Oops come back later"}</Text>;
  return (
    <>
      <Box>
        <Heading p={5} textAlign={"center"}>
          Today&apos;s Stock
        </Heading>
      </Box>
      <Grid templateColumns="repeat(1, 1fr)" gap={20} p={5}>
        {data.map((item) => (
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
      </Grid>
    </>
  );
};

// ItemList.propTypes = {
//   handleAddCart: PropTypes.func.isRequired,
//   handleClearItems: PropTypes.func.isRequired,
//   itemQuantity: PropTypes.func.isRequired,
// };

export default ItemList;
