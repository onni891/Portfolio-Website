import React from "react";
import { Box, Heading, SimpleGrid, VStack, Image, Text } from "@chakra-ui/react";

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
    { name: "SQL", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
    { name: "PHP", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
  ];

  return (
    <Box id="skills" py={20}>
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
        My Skills
      </Heading>
      <SimpleGrid columns={[1, 2, 4]} spacing={6} maxW="1200px" mx="auto" px={6}>
        {skills.map((skill) => (
          <VStack
            key={skill.name}
            bg="white"
            p={6}
            rounded="md"
            shadow="md"
            align="center"
            spacing={4}
          >
            <Image src={skill.logo} alt={skill.name} boxSize="60px" />
            <Text fontSize="lg" fontWeight="bold">
              {skill.name}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillsSection;
