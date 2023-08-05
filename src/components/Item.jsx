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
}) => {
  return (
    <GridItem>
      <VStack className="test">
        <Card maxW="sm">
          <CardBody>
            <Image src={image} alt={title} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{children}</Heading>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button _hover={{ bg: "#ffcccb" }}>Clear Items</Button>
              <Popover>
                <PopoverTrigger>
                  <Button variant="solid" colorScheme="blue">
                    Add to Cart
                  </Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader>{title}</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <NumberInput
                        size="md"
                        maxW={24}
                        defaultValue={15}
                        min={10}
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
                    <PopoverFooter>Select Quantity</PopoverFooter>
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
