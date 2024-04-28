import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRobot, FaBrain, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <VStack spacing={10}>
          <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzE0MjQzOTQzfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="full" />
          <Heading as="h1" size="2xl" textAlign="center">
            AI Solutions Inc.
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Pioneering Artificial Intelligence Consulting and Innovative AI Products
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button leftIcon={<FaRobot />} colorScheme="teal" variant="solid">
              Our Products
            </Button>
            <Button leftIcon={<FaBrain />} colorScheme="teal" variant="outline">
              Consultancy
            </Button>
          </Stack>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">Contact Us</Heading>
            <Text mt={4}>
              <FaPhoneAlt /> +123 456 7890
            </Text>
            <Text>
              <FaEnvelope /> contact@aisolutions.com
            </Text>
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
