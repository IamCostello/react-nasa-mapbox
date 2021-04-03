import { Box, Stack } from "@chakra-ui/layout";
import React from "react";
import { StyleModeButton } from "./components/common/StyleModeButton";
import "./theme/geocoder.css";
import { MapView } from "./components/MapView/MapView";
import { useViewportState } from "./hooks/useViewport";
import { SateliteView } from "./components/SateliteView/SateliteView";

function App() {
  const viewport = useViewportState();

  return (
    <Stack direction={{ base: "column", lg: "row" }}>
      <Box>
        {viewport.latitude.toFixed(2)}, {viewport.longitude.toFixed(2)},{" "}
        {viewport.zoom.toFixed(2)}
        <SateliteView />
        <StyleModeButton />
      </Box>
      <Box w="420px" height="420px">
        <MapView />
      </Box>
    </Stack>
  );
}

export default App;
