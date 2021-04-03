import { Button } from "@chakra-ui/button";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import React, { FC } from "react";
import Geocoder from "react-mapbox-gl-geocoder";
import { useViewportDispatch, useViewportState } from "../../hooks/useViewport";
import { Text, useColorModeValue } from "@chakra-ui/react";

interface ViewsControllerProps {
  onGetSateliteView: () => void;
}

/**
 * React component used to control user selected viewport
 * @param onGetSateliteView - save current coordinates as user viewport
 */
export const ViewsController: FC<ViewsControllerProps> = ({
  onGetSateliteView,
}) => {
  const viewport = useViewportState();
  const setViewport = useViewportDispatch();
  const backgroundColor = useColorModeValue("gray.50", "gray.800");
  const darkMode = useColorModeValue("light", "dark");

  return (
    <Stack
      padding={6}
      borderRadius="12px"
      backgroundColor={backgroundColor}
      zIndex="10"
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      width={{ base: "100%", md: "460px" }}
      spacing={4}
    >
      <Heading size="md">Search location</Heading>
      <Box borderRadius="4px">
        <Geocoder
          onSelected={setViewport}
          viewport={viewport}
          hideOnSelect
          updateInputOnSelect
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          className={darkMode}
        />
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <Text>
          longitude:{" "}
          <span style={{ opacity: 0.8 }}>{viewport.longitude.toFixed(2)}</span>
        </Text>
        <Text>
          latitude:{" "}
          <span style={{ opacity: 0.8 }}>{viewport.latitude.toFixed(2)}</span>
        </Text>
        <Text>
          zoom: <span style={{ opacity: 0.8 }}>{viewport.zoom.toFixed(2)}</span>
        </Text>
      </Stack>
      <Button
        width="100%"
        colorScheme="green"
        onClick={onGetSateliteView}
        sizes={["sm", "sm", "md", "md"]}
      >
        Get satelite view
      </Button>
    </Stack>
  );
};
