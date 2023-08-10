import {
  Box,
  Grid,
  Text,
  Heading,
  Spinner,
  Center,
  HStack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import Item from "./HomeItem";

const HomeItemList = ({
  handleAddCart,
  handleClearItems,
  itemQuantity,
  loading,
  error,
  data,
}) => {
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
  if (error) return <Text data-testid="error-message">Oops</Text>;
  return (
    <Box id="itemList">
      <Box>
        <Heading p={5} textAlign={"center"}>
          Today&apos;s Stock
        </Heading>
      </Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={20}
        p={5}
        className="aaw"
      >
        {data &&
          data.map((item) => (
            <Item
              key={item.id}
              itemId={item.id}
              image={item.image}
              desc={item.description}
              title={item.title}
              handleAddCart={handleAddCart}
              handleClearItems={handleClearItems}
              itemQuantity={itemQuantity}
            >
              <Text
                p={5}
                fontWeight={"semibold"}
                fontSize={"md"}
                noOfLines={2}
                minH={"88px"}
              >
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
    </Box>
  );
};

HomeItemList.propTypes = {
  handleAddCart: PropTypes.func.isRequired,
  handleClearItems: PropTypes.func.isRequired,
  itemQuantity: PropTypes.func.isRequired,
};

export default HomeItemList;
