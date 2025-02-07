import React from "react";
import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";

const ContactSection = () => {
    return (
        <Box id="contact" py={20} px={6} bg="#08233B" color="white">
            <Heading as="h2" size="xl" textAlign="center" mb={10}>
                Contact
            </Heading>
            <VStack spacing={4} maxW="600px" mx="auto">
                <Text fontSize="lg">Email: example@email.com</Text>
                <Button colorScheme="blue">Send a Message</Button>
            </VStack>
        </Box>
    );
};

export default ContactSection;
