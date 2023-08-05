import { Box, Grid, Image, Text, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import Item from "./Item";
import useDataFetching from "../hooks/fetchItemData";

const FeaturedItems = () => {
  const [data, loading, error] = useDataFetching(
    "https://fakestoreapi.com/products/category/electronics"
  );

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
          <Item key={index} image={item.image}>
            <Text p={5}>{item.title}</Text>
          </Item>
        ))}
      </Grid>
    </>
  );
};

export default FeaturedItems;
