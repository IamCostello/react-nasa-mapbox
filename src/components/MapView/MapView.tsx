import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
import MapGL, { GeolocateControl } from "react-map-gl";
import { MAX_ZOOM_VALUE, MIN_ZOOM_VALUE } from "../../config/geocoder";
import { useViewportDispatch, useViewportState } from "../../hooks/useViewport";

/**
 * React component used to display mapbox map
 */
export const MapView: FC = () => {
  const viewport = useViewportState();
  const setViewport = useViewportDispatch();

  const colorMode = useColorModeValue(
    "mapbox://styles/mapbox/light-v10",
    "mapbox://styles/mapbox/dark-v10"
  );

  const geolocateStyle = {
    bottom: 28,
    right: 0,
    margin: 8,
  };

  return (
    <Box width="100%" height="100%" filter="brightness(92%)">
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
        <GeolocateControl
          style={geolocateStyle}
          trackUserLocation
          auto
          showAccuracyCircle={false}
          showUserLocation={false}
        />
      </MapGL>
    </Box>
  );
};
