import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "customBlue.500",
          color: "white",
        },
      },
    },
  });
  

export default theme;
