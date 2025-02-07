import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection"; // Updated import
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box bg="blue.900" minH="100hv" >
      <Navbar />
      <HeroSection />
      <SkillsSection /> {/* Updated WorkSection to SkillsSection */}
      <AboutSection />
      <ContactSection />
    </Box>
  );
};

export default App;
