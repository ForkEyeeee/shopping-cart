import { Box, Center, Text, Icon } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <Center height="100vh" flexDirection="column">
      <Icon as={FaShoppingCart} w={16} h={16} color="gray.400" />
      <Text fontSize="xl" fontWeight="semibold" color="gray.600" mt={4}>
        Your cart is empty.
      </Text>
      <Text color="gray.500" mt={2} pl={5} pr={5}>
        Looks like you haven't added any items yet.
      </Text>
    </Center>
  );
};

export default EmptyCart;
