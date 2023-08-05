import { Box, Grid, Image, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Item from "./Item";
import useDataFetching from "../hooks/fetchItemData";

const FeaturedItems = () => {
  const [data, loading, error] = useDataFetching(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const [isOpen, setisOpen] = useState(false);
  const [itemCount, setItemCount] = useState([]);

  const handleAddCart = (e, itemId) => {
    const getItem = itemCount.filter((item) => item.itemId === itemId);
    if (getItem.length > 0) {
      setItemCount((prevState) =>
        prevState.map((item) =>
          item.itemId === itemId ? { ...item, count: Number(e) } : item
        )
      );
      console.log("zzzz");

      return;
    }
    setItemCount((prevItems) => [...prevItems, { itemId, count: Number(e) }]);
  };

  const handleClearItems = (e, itemId) => {
    const getItem = itemCount.filter((item) => item.itemId === itemId);
    if (getItem.length > 0) {
      setItemCount((prevState) =>
        prevState.map((item) =>
          item.itemId === itemId ? { ...item, count: 0 } : item
        )
      );
    }
    return;
  };

  if (loading)
    return (
      <Box>
        {" "}
        {/* <Heading p={5} textAlign={"center"}>
          Featured Items
        </Heading> */}
        Loading...
      </Box>
    );
  if (error) return <div>Oops come back later</div>;
  return (
    <>
      <Heading p={5} textAlign={"center"}>
        Featured Items
      </Heading>
      <Grid templateColumns="repeat(1, 1fr)" gap={20} className="aaaa" p={5}>
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

export default FeaturedItems;
