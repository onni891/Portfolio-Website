import React from "react";
import { Box, Heading, Grid, Image, Text, Badge, VStack } from "@chakra-ui/react";

const SkillsSection = () => {
  const skills = [
    {
      name: "JavaScript",
      logo: "https://www.stickpng.com/assets/images/5848152fcef1014c0b5e4967.png",
      description: "6+ years of experience, proficient in ES6+.",
      years: "6+ years",
    },
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description: "5+ years building dynamic UI components.",
      years: "5+ years",
    },
    {
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      description: "6+ years styling responsive layouts.",
      years: "6+ years",
    },
    {
      name: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      description: "6+ years of semantic HTML.",
      years: "6+ years",
    },
    {
      name: "Python",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      description: "4+ years in scripting and data analysis.",
      years: "4+ years",
    },
    {
      name: "C++",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      description: "3+ years in competitive programming.",
      years: "3+ years",
    },
    {
      name: "MySQL",
      logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      description: "3+ years designing relational databases.",
      years: "3+ years",
    },
    {
      name: "PHP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      description: "3+ years in backend web development.",
      years: "3+ years",
    },
    {
      name: "Discord JS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Discord_logo.svg",
      description: "2+ years building Discord bots.",
      years: "2+ years",
    },
    {
      name: "Chakra UI",
      logo: "https://chakra-ui.com/logo-light.svg",
      description: "1+ year creating elegant interfaces.",
      years: "1+ year",
    },
    {
      name: "Lua",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
      description: "2+ years scripting in gaming environments.",
      years: "2+ years",
    },
    {
      name: "TypeScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      description: "2+ years of typed JavaScript development.",
      years: "2+ years",
    },
  ];

  return (
    <Box id="skills" py={20} bg="#08233B">
      <Heading as="h2" size="xl" textAlign="center" mb={10} color="#fff">
        My Skills
      </Heading>
      <Grid
        templateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
        gap={6}
        maxW="1200px"
        mx="auto"
        px={6}
      >
        {skills.map((skill) => (
          <Box
            key={skill.name}
            bg="rgba(255, 255, 255, 0.1)"
            p={6}
            rounded="lg"
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.2s"
          >
            <VStack align="start">
              <Image src={skill.logo} alt={skill.name} boxSize="60px" mb={4} />
              <Text fontSize="lg" fontWeight="bold" color="#fff">
                {skill.name}
              </Text>
              <Text fontSize="sm" color="rgba(255, 255, 255, 0.7)">
                {skill.description}
              </Text>
              <Badge colorScheme="teal" mt={2}>
                {skill.years}
              </Badge>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection;
