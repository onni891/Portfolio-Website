import React from "react";
import { Box, Text, Link, Flex } from "@chakra-ui/react";

const ContactSection = () => {
  return (
    <Box bg="#08233B" py={4} px={8} color="white" textAlign="center">
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={2}
        fontSize="sm"
      >
        <Text>
          © 2025. KoodiTaivas | Onni Kolehmainen. All Rights Reserved.
        </Text>
        <Link
          href="mailto:lucky.onniko@gmail.com"
          color="blue.300"
          fontWeight="bold"
        >
          lucky.onniko@gmail.com
        </Link>
      </Flex>
    </Box>
  );
};

export default ContactSection;
