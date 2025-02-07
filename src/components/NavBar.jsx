import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  VStack,
} from "@chakra-ui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      bg="whiteAlpha.200"
      backdropFilter="blur(10px)"
      px={6}
      py={3}
      mt={0}
      position="sticky"
      top={30}
      zIndex={1000}
      rounded="xl"
      maxW="1200px"
      mx="auto"
    >
      <Flex align="center" justify="space-between">
        {/* Left: Logo */}
        <Image
          src="https://i.postimg.cc/t4FxRWft/image-removebg-preview.png"
          alt="Logo"
          boxSize="38px"
        />

        {/* Center: Navbar Links */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
        >
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={scrollToTop}>
            Home
          </Link>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={() => scrollTo('skills')}>
            My Skills
          </Link>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={() => scrollTo('about')}>
            About
          </Link>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={() => scrollTo('contact')}>
            Contact
          </Link>
        </HStack>

        {/* Right: Social Icons */}
        <HStack
          spacing={4}
          display={{ base: "none", md: "flex" }}
        >
          <Link href="https://www.linkedin.com" isExternal>
            <Image src="https://i.postimg.cc/wMg1vjtf/image.png" alt="LinkedIn" boxSize="24px" />
          </Link>
          <Link href="https://www.github.com" isExternal>
            <Image src="https://i.postimg.cc/1zVn7ThH/image-removebg-preview-1.png" alt="GitHub" boxSize="24px" />
          </Link>
          <Link href="https://www.twitter.com" isExternal>
            <Image src="https://i.postimg.cc/zBmLsjq1/image.png" alt="X" boxSize="24px" />
          </Link>
        </HStack>

        {/* Custom Menu Toggle Button */}
        <Box display={{ base: "flex", md: "none" }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Box
            width="40px"
            height="40px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="10px"
            cursor="pointer"
          >
            <Box
              width="100%"
              height="4px"
              bg="white"
              borderRadius="5px"
              transition="0.3s"
              transform={isMenuOpen ? "translateY(14px) rotate(60deg)" : ""}
              transformOrigin="right"
            ></Box>
            <Box
              width="100%"
              height="4px"
              bg="white"
              borderRadius="5px"
              transition="0.3s"
              transform={isMenuOpen ? "translateY(-14px) rotate(-60deg)" : ""}
              transformOrigin="left"
            ></Box>
          </Box>
        </Box>
      </Flex>

      {/* Mobile Menu with Smooth Fade-In */}
      <Box
        bg="blue.900"
        py={4}
        display={isMenuOpen ? "block" : "none"}
        opacity={isMenuOpen ? 1 : 0}
        transform={isMenuOpen ? "translateY(0)" : "translateY(-20px)"}
        transition="opacity 0.3s ease, transform 0.3s ease"
        rounded="md"
        shadow="md"
      >
        <VStack spacing={6} mt={4}>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={scrollToTop}>
            Home
          </Link>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={() => scrollTo('skills')}>
            My Skills
          </Link>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={() => scrollTo('about')}>
            About
          </Link>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={() => scrollTo('contact')}>
            Contact
          </Link>
          <HStack spacing={4}>
            <Link href="https://www.linkedin.com" isExternal>
              <Image src="https://i.postimg.cc/wMg1vjtf/image.png" alt="LinkedIn" boxSize="24px" />
            </Link>
            <Link href="https://www.github.com" isExternal>
              <Image src="https://i.postimg.cc/1zVn7ThH/image-removebg-preview-1.png" alt="GitHub" boxSize="24px" />
            </Link>
            <Link href="https://www.twitter.com" isExternal>
              <Image src="https://i.postimg.cc/zBmLsjq1/image.png" alt="X" boxSize="24px" />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Navbar;
