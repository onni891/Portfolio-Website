import React from "react";
import { Box, Text, Heading, VStack, Link, Grid, GridItem, Flex, Circle } from "@chakra-ui/react";

const TimelineContainer = ({ children }) => (
    <Flex
        direction="column"
        align="center"
        position="relative"
        maxW="1200px"
        mx="auto"
    >
        {children}
    </Flex>
);

const TimelineItem = ({ title, company, date, children }) => (
    <Box position="relative" mb={10} textAlign="left" w="full">
        <Box pl={12}>
            <Heading as="h4" size="md" mb={1}>
                {title}
            </Heading>
            <Text fontSize="sm" color="gray.400" mb={1}>
                {company}
            </Text>
            <Text fontSize="sm" color="gray.500" mb={2}>
                {date}
            </Text>
            <Text fontSize="md" color="gray.300">
                {children}
            </Text>
        </Box>
    </Box>
);

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
                        Whether it's building a new website, enhancing an existing one, or creating custom features, I love solving challenges with clean and efficient code. My goal is to make the web work for you while ensuring it looks great.
                    </Text>

                    <Text fontSize="lg" color="gray.300" lineHeight="1.8">
                        Each project is an opportunity to grow, learn, and create something meaningful. Curious to learn more? <Link href="mailto:lucky.onniko@gmail.com" color="blue.300">Contact Me!</Link>
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

            {/* Timeline Section Added Below */}
            <Box mt={16}>
                <Heading as="h3" fontSize="3xl" textAlign="center" mb={12}>
                    Work Experience
                </Heading>
                <TimelineContainer>
                    <TimelineItem
                        title="Extralife"
                        company="Director of Internal Development"
                        date="December 2022 - Present (2 years 3 months)"
                    >
                        During my time at Extralife, I've overseen the entire development process, managed a dedicated team, and handled staff hiring. I've also contributed heavily to **Extralife's gaming platform**, including helping build and maintain the{" "}
                        <Link href="https://extralife.gg/home" color="blue.300" isExternal>
                            Extralife.gg
                        </Link>{" "}
                        website to ensure a dynamic and engaging user experience.
                    </TimelineItem>
                    <TimelineItem
                        title="Kooditaivas.fi"
                        company="CEO & Founder"
                        date="February 4th, 2023 - Present (1 year)"
                    >
                        I founded Kooditaivas.fi to provide custom web solutions for businesses. As CEO and lead developer, I build fully tailored websites, lead client projects, and ensure technical excellence in everything we deliver.
                    </TimelineItem>
                    <TimelineItem
                        title="Intern"
                        company="Nolwenture"
                        date="April 24th, 2023 - April 28th, 2023 (1 week)"
                    >
                        Short-term internship focused on gaining hands-on experience in web development at Nolwenture. Learned industry best practices and contributed to frontend features under mentorship. Learn more about Nolwenture{" "}
                        <Link href="https://www.nolwenture.com" color="blue.300" isExternal>
                            here
                        </Link>
                        .
                    </TimelineItem>
                </TimelineContainer>
            </Box>
        </Box>
    );
};

export default AboutSection;
