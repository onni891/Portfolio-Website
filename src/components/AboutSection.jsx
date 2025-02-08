import React from "react";
import { Box, Text, Heading, VStack, Link, Grid, GridItem, Flex } from "@chakra-ui/react";

const AboutSection = () => {
    return (
        <Box id="about" bg="#08233B" py={16} px={8} color="white">
            <Grid
                templateColumns={{ base: "1fr", md: "3fr 2fr" }}
                gap={10}
                alignItems="start"
                maxW="1200px"
                mx="auto"
            >
                {/* Left Side: Heading and Description */}
                <GridItem>
                    <Heading
                        as="h2"
                        fontSize={{ base: "4xl", md: "6xl" }}
                        fontWeight="bold"
                        mb={8}
                        lineHeight="1.2"
                    >
                        I CREATE WEBSITES <br /> THAT ELEVATE BRANDS
                    </Heading>

                    <Text fontSize="lg" color="gray.300" lineHeight="1.8" mb={6}>
                        With over 6 years of experience in web development, I specialize in crafting dynamic and user-friendly websites that leave a lasting impression. From small businesses to established brands, I help bring visions to life online.
                    </Text>

                    <Text fontSize="lg" color="gray.300" lineHeight="1.8" mb={6}>
                        Whether it’s building a new website, enhancing an existing one, or creating custom features, I love solving challenges with clean and efficient code. My goal is to make the web work for you while ensuring it looks great.
                    </Text>

                    <Text fontSize="lg" color="gray.300" lineHeight="1.8">
                        Each project is an opportunity to grow, learn, and create something meaningful. Curious to learn more? Contact Me!
                    </Text>
                </GridItem>

                {/* Right Side: Tools Section */}
                <GridItem>
                    <Flex direction="column" gap={6} mt={249}>
                        {/* Frontend Tools */}
                        <VStack align="start">
                            <Heading as="h3" fontSize="xl" color="white" mb={4}>
                                Frontend Tools
                            </Heading>
                            <Text color="gray.400" fontSize="md">
                                JavaScript (ES6+), React, Next.js, TypeScript, HTML5, Git/GitHub.
                            </Text>
                        </VStack>

                        {/* UI Libraries */}
                        <VStack align="start">
                            <Heading as="h3" fontSize="xl" color="white" mb={4}>
                                UI Libraries
                            </Heading>
                            <Text color="gray.400" fontSize="md">
                                Tailwind CSS, Chakra UI, Styled Components, Framer Motion, Bootstrap.
                            </Text>
                        </VStack>

                        {/* Back-End Coding */}
                        <VStack align="start">
                            <Heading as="h3" fontSize="xl" color="white" mb={4}>
                                Back-End Coding
                            </Heading>
                            <Text color="gray.400" fontSize="md">
                                Node.js, Express.js, MySQL, MongoDB, PHP, REST APIs, Firebase.
                            </Text>
                        </VStack>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default AboutSection;
