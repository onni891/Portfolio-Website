import React from "react";
import { Box, Text, Heading, VStack, Link, Grid, GridItem, Separator, Flex } from "@chakra-ui/react";

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
                        I AMPLIFY BRAND VOICES <br /> THROUGH THE WEB
                    </Heading>

                    <Text fontSize="lg" color="gray.300" lineHeight="1.8" mb={6}>
                        My passion lies in creating strong business solutions that aid
                        business growth. Whether it's a website to boost brand publicity or
                        software solutions that streamline otherwise manual processes, I
                        love taking brands from point A to their dreamy point B and
                        iteratively improving as time goes on.
                    </Text>

                  

                    <Text fontSize="lg" color="gray.300" lineHeight="1.8" mb={6}>
                        From writing my first lines of code back in late 2019 to this point,
                        I have continually refined my development skills, picking up UI/UX
                        design along the way and solving complex challenges to ensure
                        improvement.
                    </Text>

                    

                    <Text fontSize="lg" color="gray.300" lineHeight="1.8">
                        Each challenge is unique, so I ensure that I learn and grow through
                        each one, ensuring that I not only put in my best but also deliver
                        solutions that businesses are proud to call their own. Wanna learn
                        more? Here's{" "}
                        <Link href="#" color="blue.300" textDecoration="underline">
                            my résumé
                        </Link>
                        .
                    </Text>
                </GridItem>

                {/* Right Side: Tools Section */}
                <GridItem>
                    <Flex direction="column" gap={6} mt={249} >
                        {/* Frontend Tools */}
                        <VStack align="start">
                            <Heading as="h3" fontSize="xl" color="white" mb={4}>
                                Frontend Tools
                            </Heading>
                            <Text color="gray.400" fontSize="md">
                                JavaScript (ES6+), React, Next.js, TypeScript, Redux, Redux
                                Toolkit, React Query, HTML5, Git/GitHub, React Hook Form,
                                Formik.
                            </Text>
                        </VStack>

                        {/* UI Libraries */}
                        <VStack align="start">
                            <Heading as="h3" fontSize="xl" color="white" mb={4}>
                                UI Libraries
                            </Heading>
                            <Text color="gray.400" fontSize="md">
                                CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Chakra UI,
                                Framer Motion, Bootstrap, ReCharts.
                            </Text>
                        </VStack>

                        {/* Design Tools */}
                        <VStack align="start">
                            <Heading as="h3" fontSize="xl" color="white" mb={4}>
                                Design Tools
                            </Heading>
                            <Text color="gray.400" fontSize="md">
                                Figma, FigJam, UX Research, UI Design, Prototyping.
                            </Text>
                        </VStack>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default AboutSection;
