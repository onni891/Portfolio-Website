import React from "react";
import { Box, Flex, VStack, Text, Heading, Image } from "@chakra-ui/react";

const HeroSection = () => {
    return (
        <Box id="hero" bg="customBlue.500" color="white" py={20}>
            <Flex align="center" justify="space-between" maxW="1200px" mx="auto" px={6}>
                <VStack align="start" spacing={4}>
                    <Text fontSize="lg">Hey, there 👋</Text>
                    <Heading as="h1" size="2xl" fontWeight="bold">
                        I'm <Text as="span" color="blue.300">Adeola Badero</Text>
                    </Heading>
                    <Heading as="h2" size="lg" fontWeight="bold">
                        a Software Engineer
                    </Heading>
                    <Text fontSize="lg">
                        Currently focused on building user experiences that drive growth.
                    </Text>
                </VStack>
                <Box>
                    <Image
                        src="https://avatars.githubusercontent.com/u/103763249?v=4"
                        alt="Profile"
                        rounded="lg"
                        boxSize="200px"
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default HeroSection;
