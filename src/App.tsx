import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import { StyleModeButton } from "./components/common/StyleModeButton";
import "./theme/geocoder.css";
import { MapView } from "./components/MapView/MapView";

function App() {
  return (
    <Stack direction={{ base: "column", lg: "row" }}>
      <Box>
        {/* {viewport.latitude.toFixed(2)}, {viewport.longitude.toFixed(2)},{" "}
        {viewport.zoom.toFixed(2)} */}
        <StyleModeButton />
      </Box>
      <Box w="420px" height="420px">
        <MapView />
      </Box>
    </Stack>
  );
}

export default App;
