import React from "react";
import { Box, Image, Badge, Heading } from "@chakra-ui/react";

const SkillsSection = () => {
  const skills = [
    {
      name: "JavaScript",
      logo: "https://i.postimg.cc/c45zGD5j/image-removebg-preview-3.png",
      years: "6+ years",
    },
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      years: "5+ years",
    },
    {
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      years: "6+ years",
    },
    {
      name: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      years: "6+ years",
    },
    {
      name: "Python",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      years: "4+ years",
    },
    {
      name: "C++",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      years: "3+ years",
    },
    {
      name: "MySQL",
      logo: "https://i.postimg.cc/rpTCBxc3/image.png",
      years: "3+ years",
    },
    {
      name: "PHP",
      logo: "https://i.postimg.cc/26cQLtvN/image.png",
      years: "3+ years",
    },
  ];

  return (
    <Box py={20} bgGradient="linear(to-b, #0D223E, #102A44)">
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="bold"
        mb={8}
        lineHeight="1.2"
        textAlign="center"
        color="#E2E8F0"
      >
        My Coding Languages
      </Heading>
      <Box
        id="skills"
        display="grid"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}
        px={6}
        maxW="1200px"
        mx="auto"
      >
        {skills.map((skill) => (
          <Box
            key={skill.name}
            bg="rgba(255, 255, 255, 0.1)"
            shadow="lg"
            p={6}
            rounded="xl"
            _hover={{ transform: "translateY(-10px)", boxShadow: "xl" }}
            transition="all 0.3s ease-in-out"
            backdropFilter="blur(10px)"
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              boxSize="80px"
              bg="rgba(255, 255, 255, 0.2)"
              p={4}
              rounded="full"
              mx="auto"
            />
            <Badge
              mt={4}
              colorScheme="teal"
              fontSize="md"
              textAlign="center"
              display="block"
              px={4}
              py={1}
              borderRadius="full"
            >
              {skill.years}
            </Badge>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;