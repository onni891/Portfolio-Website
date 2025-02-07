import React, { useState } from "react";
import { Box, Flex, VStack, Text, Heading, Image } from "@chakra-ui/react";

const HeroSection = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; // Further increased movement scale factor
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <Box id="hero" bg="#08233B" color="white" py={{ base: 16, md: 32 }}>
            <Flex
                align={{ base: "flex-start", md: "flex-start" }}
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center", md: "space-between" }}
                maxW="1200px"
                mx="auto"
                px={6}
            >
                <VStack align={{ base: "center", md: "start" }} spacing={10} textAlign={{ base: "center", md: "left" }} mt={{ base: 4, md: 24 }}>
                    <Text fontSize={{ base: "xl", md: "2xl" }} color="gray.400" letterSpacing="widest">
                        Hey, there 👋
                    </Text>
                    <Heading
                        as="h1"
                        size="2xl"
                        fontWeight="bold"
                        fontSize={{ base: "4xl", md: "6xl" }}
                        lineHeight="shorter"
                        letterSpacing="wide"
                    >
                        <Text as="span" color="gray.200">I'm </Text>
                        <Text as="span" color="blue.300">Onni Kolehmainen</Text>
                    </Heading>
                    <Heading
                        as="h2"
                        fontWeight="bold"
                        fontSize={{ base: "3xl", md: "5xl" }}
                        lineHeight="shorter"
                        letterSpacing="wide"
                    >
                        a Web Developer
                    </Heading>
                    <Text fontSize={{ base: "xl", md: "2xl" }} color="gray.500">
                        Currently focused on building user experiences that drive growth.
                    </Text>
                </VStack>
                <Box
                    mt={{ base: 8, md: 24 }}
                    ml={{ base: 0, md: 6 }}
                    boxSize={{ base: "300px", md: "350px" }}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mx={{ base: "auto", md: "0" }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform: `rotate(-5deg) translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
                        transition: "transform 0.2s cubic-bezier(0.25, 1.25, 0.5, 1.25)",
                    }}
                >
                    <Image
                        src="https://i.postimg.cc/90cZRpRj/image.png"
                        alt="Profile"
                        rounded="lg"
                        boxSize="100%"
                    />
                </Box>
            </Flex>
            <Box mt={{ base: 8, md: 32 }}></Box>
        </Box>
    );
};

export default HeroSection;