import React, { useState, useEffect } from "react";
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
  const [currentPage, setCurrentPage] = useState('home'); // Track current page

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if at the top or bottom of the page
      if (scrollPosition < 50) {
        setCurrentPage('home');
      } else if (scrollPosition + windowHeight >= document.body.scrollHeight - 50) {
        setCurrentPage('contact');
      } else {
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, clientHeight } = element;

            // Adjusted range for About and Home
            if (
              (scrollPosition >= offsetTop - 150 && scrollPosition < offsetTop + clientHeight - 50) || // Larger range for About
              (scrollPosition >= offsetTop - 50 && section === 'home') // Adjusted range for Home
            ) {
              setCurrentPage(section);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      bg="whiteAlpha.200"
      backdropFilter="blur(10px)"
      px={{ base: 4, md: 8 }} // Internal padding for navbar content
      py={3}
      mt={0}
      position="sticky"
      top={30}
      zIndex={1000}
      rounded="xl"
      width="calc(100% - 48px)" // Adjust width to account for additional padding (24px on each side)
      maxW="1200px" // Maximum width for larger screens
      margin="0 auto" // Center the navbar horizontally
    >
      <Flex align="center" justify="space-between">
        {/* Left: Logo */}
        <Image
          src="https://i.postimg.cc/t4FxRWft/image-removebg-preview.png"
          alt="Logo"
          boxSize="38px"
        />

        {/* Center: Navbar Links */}
        <HStack display={{ base: "none", md: "flex" }}>
          <Link 
            fontSize="lg" 
            color={currentPage === 'home' ? "white" : "gray.400"} 
            fontWeight="normal" 
            _hover={{ color: "blue.300" }} 
            onClick={() => { setCurrentPage('home'); scrollToTop(); }}
            marginX={6}
          >
            Home
          </Link>
          <Link 
            fontSize="lg" 
            color={currentPage === 'skills' ? "white" : "gray.400"} 
            fontWeight="normal" 
            _hover={{ color: "blue.300" }} 
            onClick={() => { setCurrentPage('skills'); scrollTo('skills'); }} 
            marginX={6}
          >
            Languages
          </Link>
          <Link 
            fontSize="lg" 
            color={currentPage === 'about' ? "white" : "gray.400"} 
            fontWeight="normal" 
            _hover={{ color: "blue.300" }} 
            onClick={() => { setCurrentPage('about'); scrollTo('about'); }} 
            marginX={6}
          >
            About
          </Link>
          <Link 
            fontSize="lg" 
            color={currentPage === 'contact' ? "white" : "gray.400"} 
            fontWeight="normal" 
            _hover={{ color: "blue.300" }} 
            onClick={() => { setCurrentPage('contact'); scrollTo('contact'); }} 
            marginX={6}
          >
            Contact
          </Link>
        </HStack>

        {/* Right: Social Icons */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
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
        position="absolute"
        top="100%"
        left="0"
        right="0"
        zIndex={999}
      >
        <VStack spacing={6} mt={4}>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={scrollToTop}>
            Home
          </Link>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={() => scrollTo('Skills')}>
            Languages
          </Link>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={() => scrollTo('about')}>
            About
          </Link>
          <Link fontSize="lg" color="white" _hover={{ color: "blue.300" }} onClick={() => scrollTo('contact')}>
            Contact
          </Link>
          <HStack spacing={4}>
            <Link href="https://www.linkedin.com/in/onni-kolehmainen-4471b6327/" isExternal>
              <Image src="https://i.postimg.cc/wMg1vjtf/image.png" alt="LinkedIn" boxSize="24px" />
            </Link>
            <Link href="https://github.com/onni891" isExternal>
              <Image src="https://i.postimg.cc/1zVn7ThH/image-removebg-preview-1.png" alt="GitHub" boxSize="24px" />
            </Link>
            <Link href="https://x.com/OnniKolehmainen" isExternal>
              <Image src="https://i.postimg.cc/zBmLsjq1/image.png" alt="X" boxSize="24px" />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Navbar;
