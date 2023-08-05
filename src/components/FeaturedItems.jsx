import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import useDataFetching from "../hooks/fetchItemData";

const FeaturedItems = () => {
  const [data, loading, error] = useDataFetching(
    "https://fakestoreapi.com/products/category/electronics"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Box>
      {" "}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </Box>
  );
};

export default FeaturedItems;
