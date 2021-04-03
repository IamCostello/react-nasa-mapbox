import { Button } from "@chakra-ui/button";
import { Box, Center, Stack } from "@chakra-ui/layout";
import React, { FC } from "react";
import Geocoder from "react-mapbox-gl-geocoder";
import { useViewportDispatch, useViewportState } from "../../hooks/useViewport";
import { Text, useColorModeValue } from "@chakra-ui/react";

interface ViewsControllerProps {}

export const ViewsController: FC<ViewsControllerProps> = ({}) => {
  const viewport = useViewportState();
  const setViewport = useViewportDispatch();
  const backgroundColor = useColorModeValue("gray.50", "gray.800");
  const inputBorder = useColorModeValue(
    "1px solid rgb(0, 0, 0, 0.5)",
    "1px solid rgb(255, 255, 255, 0.5)"
  );
  const darkMode = useColorModeValue("light", "dark");

  return (
    // <Center position="fixed" h="100vh" w="100vw" zIndex="10">
    <Box
      padding={8}
      borderRadius="12px"
      backgroundColor={backgroundColor}
      zIndex="10"
      position="fixed"
      top="50%"
      // transform="translateX(-50%)"
      left="50%"
      transform="translate(-50%, -50%)"
      width="360px"
    >
      <Stack direction="row">
        <Text opacity={0.8}>latitude: {viewport.latitude.toFixed(2)}</Text>
        <Text opacity={0.8}>| longitude: {viewport.longitude.toFixed(2)}</Text>
      </Stack>
      <Box borderRadius="4px" my={4}>
        <Geocoder
          onSelected={setViewport}
          viewport={viewport}
          hideOnSelect
          updateInputOnSelect
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          className={darkMode}
        />
      </Box>
      <Button width="100%" colorScheme="green">
        Get satelite view
      </Button>
    </Box>
    // </Center>
  );
};
