import {
  Card,
  Box,
  CardBody,
  Image,
  VStack,
  GridItem,
  Stack,
  Text,
  Divider,
  Center,
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
  image,
  title,
  price,
  itemId,
  handleAddCart,
  handleClearItems,
  itemQuantity,
}) => {
  const count = typeof itemQuantity === "function" && itemQuantity(itemId);

  return (
    <GridItem>
      <VStack>
        <Card maxW="sm" boxShadow={"lg"}>
          <CardBody>
            <Box>
              <Image
                src={image}
                alt={title}
                borderRadius="lg"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                width="100%"
                aspectRatio={4 / 3}
                objectFit="contain"
                padding={5}
              />
            </Box>
            <Stack mt="6" spacing="3">
              <Box>
                <Text
                  p={5}
                  fontWeight={"semibold"}
                  fontSize={"md"}
                  noOfLines={2}
                  minH={"88px"}
                >
                  {title}
                </Text>
                <Text
                  textAlign={"end"}
                  color={"green"}
                  fontWeight={"bold"}
                  fontSize={32}
                >
                  ${price}
                </Text>
              </Box>
            </Stack>
          </CardBody>
          <Box p={5}>
            <Text mt={2} fontSize="md" fontWeight="semibold" color="blue.600">
              Qty: {count > 0 ? count : ""}
            </Text>
          </Box>
          <Divider />

          <CardFooter justifyContent={"center"}>
            <ButtonGroup spacing={"2"} className="test">
              <Button
                _hover={{ bg: "#ffcccb" }}
                variant={"ghost"}
                onClick={() => {
                  handleClearItems(itemId);
                }}
              >
                Clear Items
              </Button>

              <Popover placement="bottom">
                <PopoverTrigger>
                  <Button
                    variant="outline"
                    colorScheme="green"
                    onClick={() => {
                      handleAddCart(count === undefined ? 1 : count, itemId);
                    }}
                  >
                    Add to Cart
                  </Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent width={"100%"} borderWidth={2}>
                    <PopoverArrow />
                    <PopoverBody>
                      <Center>
                        <NumberInput
                          float={"right"}
                          size="md"
                          maxW={24}
                          defaultValue={count === undefined ? 1 : count}
                          value={count === undefined ? 0 : count}
                          min={0}
                          onChange={(e) => handleAddCart(e, itemId)}
                        >
                          <NumberInputField />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      </Center>
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
  price: PropTypes.number.isRequired,
  itemId: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleAddCart: PropTypes.func.isRequired,
  handleClearItems: PropTypes.func.isRequired,
  itemQuantity: PropTypes.func.isRequired,
};

export default HomeItem;
