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
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

const Item = ({
  children,
  image,
  title,
  itemCount,
  setItemCount,
  itemId,
  handleAddCart,
  handleClearItems,
}) => {
  // console.log(children);
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
          <Text>
            {itemCount.find((item) => item.itemId === itemId) &&
              itemCount.filter((item) => item.itemId === itemId)[0].count}
          </Text>
          <Divider />

          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                _hover={{ bg: "#ffcccb" }}
                onClick={(e) => handleClearItems(e, itemId)}
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

export default Item;
