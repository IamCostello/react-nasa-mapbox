import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { FC, useCallback, useRef, useState } from "react";
import MapGL, { MapRef } from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";

interface MapViewProps {}

export const MapView: FC<MapViewProps> = ({}) => {
  const [viewport, setViewport] = useState({
    latitude: 50.3003322078928,
    longitude: 18.85904614536362,
    zoom: 12,
  });

  const colorMode = useColorModeValue(
    "mapbox://styles/mapbox/light-v10",
    "mapbox://styles/mapbox/dark-v10"
  );

  const mapRef = useRef<MapRef | null>(null);

  const handleViewportChange = useCallback(
    (newCords) => setViewport(newCords),
    []
  );

  return (
    <Box w="420px" height="420px">
      <MapGL
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        ref={mapRef}
        width="100%"
        height="100%"
        // mapStyle="mapbox://styles/mapbox/dark-v10"
        mapStyle={colorMode}
        {...viewport}
      >
        <Geocoder
          onSelected={handleViewportChange}
          viewport={viewport}
          hideOnSelect={true}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          // mapRef={mapRef}
        />
      </MapGL>
    </Box>
  );
};
