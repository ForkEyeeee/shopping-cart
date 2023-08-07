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

const Item = ({
  children,
  image,
  title,
  desc,
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
            <Image src={image} alt={title} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Box>{children}</Box>
            </Stack>
          </CardBody>
          <Text>{count}</Text>
          <Divider />

          <CardFooter>
            <ButtonGroup spacing="2">
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
                  <PopoverContent bg="blue.100" borderColor="blue.300">
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

Item.propTypes = {
  children: PropTypes.array.isRequired,
  itemId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleAddCart: PropTypes.func.isRequired,
  handleClearItems: PropTypes.func.isRequired,
  itemQuantity: PropTypes.func.isRequired,
};

export default Item;
