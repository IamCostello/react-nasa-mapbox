import { Box, Stack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { StyleModeButton } from "../components/common/StyleModeButton";
import "../theme/geocoder.css";
import { MapView } from "../components/MapView/MapView";
import { useViewportState } from "../hooks/useViewport";
import { SateliteView } from "../components/SateliteView/SateliteView";
import { ViewsController } from "../components/ViewsController/ViewsController";
import { useColorModeValue } from "@chakra-ui/react";

function App() {
  const viewport = useViewportState();
  const [userViewport, setUserViewport] = useState(viewport);
  const backGroundColorMode = useColorModeValue("gray.200", "gray.900");
  const handleGetSateliteView = () => {
    setUserViewport(viewport);
  };

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      w="100vw"
      h="100vh"
      backgroundColor={backGroundColorMode}
    >
      <Box w={{ base: "100%", lg: "50%" }} h={{ base: "50%", lg: "100%" }}>
        <SateliteView userViewport={userViewport} />
        <StyleModeButton />
        <ViewsController onGetSateliteView={handleGetSateliteView} />
      </Box>
      <Box w={{ base: "100%", lg: "50%" }} h={{ base: "50%", lg: "100%" }}>
        <MapView />
      </Box>
    </Stack>
  );
}

export default App;
