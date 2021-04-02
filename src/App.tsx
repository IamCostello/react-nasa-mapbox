import { Box, Stack } from "@chakra-ui/layout";
import React from "react";

function App() {
  return (
    <Stack direction={{ base: "column", lg: "row" }}>
      <Box>Nasa view</Box>
      <Box>Map view</Box>
    </Stack>
  );
}

export default App;
