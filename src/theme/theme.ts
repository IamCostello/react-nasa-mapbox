import { extendTheme } from "@chakra-ui/react";

const nightMode = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});

export default nightMode;
