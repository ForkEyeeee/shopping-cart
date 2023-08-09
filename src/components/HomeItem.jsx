import {
  Card,
  Box,
  Flex,
  CardBody,
  Image,
  VStack,
  GridItem,
  Stack,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverFooter,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const HomeItem = ({
  children,
  image,
  title,
  itemId,
  handleAddCart,
  handleClearItems,
  itemQuantity,
}) => {
  const count = typeof itemQuantity === "function" ? itemQuantity(itemId) : 0;
  return (
    <GridItem>
      <VStack className="test">
        <Card maxW="sm">
          <CardBody>
            <Image boxSize={300} src={image} alt={title} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Box>{children}</Box>
            </Stack>
          </CardBody>
          <Text
            fontSize="sm"
            fontWeight="medium"
            p={1}
            bg="blue.50"
            borderRadius="sm"
          >
            Qty: {count}
          </Text>
          <Divider />

          <CardFooter justifyContent={"center"}>
            <ButtonGroup spacing="2" className="test">
              <Button
                _hover={{ bg: "#ffcccb" }}
                onClick={() => handleClearItems(itemId)}
              >
                Clear Items
              </Button>

              <Popover placement="bottom">
                <PopoverTrigger>
                  <Button variant="solid" colorScheme="blue">
                    Add to Cart
                  </Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <Flex className="test">
                      {/* <PopoverHeader>{title}</PopoverHeader> */}
                      {/* <PopoverCloseButton bg="purple.500" /> */}
                    </Flex>
                    <PopoverBody>
                      <NumberInput
                        float={"right"}
                        size="md"
                        maxW={24}
                        defaultValue={0}
                        value={count}
                        min={0}
                        onChange={(e) => {
                          handleAddCart(e, itemId);
                        }}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </PopoverBody>
                    <PopoverFooter textAlign={"center"}>
                      Select Quantity
                    </PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </VStack>
    </GridItem>
  );
};

HomeItem.propTypes = {
  children: PropTypes.array.isRequired,
  itemId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleAddCart: PropTypes.func.isRequired,
  handleClearItems: PropTypes.func.isRequired,
  itemQuantity: PropTypes.func.isRequired,
};

export default HomeItem;
