import { VStack, Text, Center } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Center height={"100vh"} fontSize={"2xl"}>
      <VStack>
        <Text>404 - Page Not Found</Text>
        <Text>
          The page you are looking for doesn&apos;t exist or has been moved.
        </Text>
      </VStack>
    </Center>
  );
};

export default ErrorPage;
