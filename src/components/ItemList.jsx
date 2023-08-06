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

const ItemList = ({ itemCount, setItemCount }) => {
  const [data, loading, error] = useDataFetching(
    "https://fakestoreapi.com/products/category/electronics"
  );

  console.log(data);

  const handleAddCart = (e, itemId) => {
    if (itemCount.find((item) => item.itemId === itemId) !== undefined) {
      setItemCount((prevState) =>
        prevState.map((item) =>
          item.itemId === itemId ? { ...item, count: Number(e) } : item
        )
      );
    } else {
      setItemCount((prevItems) => [...prevItems, { itemId, count: Number(e) }]);
    }
    return;
  };

  const handleClearItems = (itemId) => {
    if (itemCount.find((item) => item.itemId === itemId) !== undefined) {
      setItemCount((prevState) =>
        prevState.filter((prevItem) => prevItem.itemId !== itemId)
      );
    }
    return;
  };

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
        {data.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            title={item.title}
            itemCount={itemCount}
            setItemCount={setItemCount}
            itemId={item.id}
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
          </Item>
        ))}
      </Grid>
    </>
  );
};

ItemList.propTypes = {
  itemCount: PropTypes.object.isRequired,
  setItemCount: PropTypes.func.isRequired,
};

export default ItemList;
