import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection"; // Updated import
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import { Box } from "@chakra-ui/react";

const App = () => {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    skills: false,
    about: false,
    contact: false,
  });

  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <Box bg="#08233B" minH="100vh">
      <Navbar />
      <Box
        id="hero"
        ref={(el) => (sectionRefs.current[0] = el)}
        opacity={visibleSections.hero ? 1 : 0}
        transition="opacity 1s ease" // Slower fade-in
      >
        <HeroSection />
      </Box>
      <Box
        id="skills"
        ref={(el) => (sectionRefs.current[1] = el)}
        opacity={visibleSections.skills ? 1 : 0}
        transition="opacity 1s ease" // Slower fade-in
      >
        <SkillsSection /> {/* Updated WorkSection to SkillsSection */}
      </Box>
      <Box
        id="about"
        ref={(el) => (sectionRefs.current[2] = el)}
        opacity={visibleSections.about ? 1 : 0}
        transition="opacity 1s ease" // Slower fade-in
      >
        <AboutSection />
      </Box>
      <Box
        id="contact"
        ref={(el) => (sectionRefs.current[3] = el)}
        opacity={visibleSections.contact ? 1 : 0}
        transition="opacity 1s ease" // Slower fade-in
      >
        <ContactSection />
      </Box>
    </Box>
  );
};

export default App;
