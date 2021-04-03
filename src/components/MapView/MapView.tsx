import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import { MAX_ZOOM_VALUE, MIN_ZOOM_VALUE } from "../../config/geocoder";
import { useViewportDispatch, useViewportState } from "../../hooks/useViewport";

interface MapViewProps {}

export const MapView: FC<MapViewProps> = ({}) => {
  const viewport = useViewportState();
  const setViewport = useViewportDispatch();

  const colorMode = useColorModeValue(
    "mapbox://styles/mapbox/light-v10",
    "mapbox://styles/mapbox/dark-v10"
  );

  return (
    <Box w="820px" height="820px">
      <MapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        width="100%"
        height="100%"
        mapStyle={colorMode}
        maxZoom={MAX_ZOOM_VALUE}
        minZoom={MIN_ZOOM_VALUE}
      >
        <Geocoder
          onSelected={setViewport}
          viewport={viewport}
          hideOnSelect
          updateInputOnSelect
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        />
        <GeolocateControl trackUserLocation auto showAccuracyCircle={false} />
      </MapGL>
    </Box>
  );
};
