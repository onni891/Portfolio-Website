import React from "react"
import { Box, Text, Button, VStack } from "@chakra-ui/react"

const TestComponent = () => {
  return (
    <VStack spacing={4} align="stretch" p={4} bg="gray.100" rounded="lg">
      <Text fontSize="lg" fontWeight="bold">
        This is a Test Component
      </Text>
      <Button colorScheme="blue">Test Button</Button>
    </VStack>
  )
}

export default TestComponent
