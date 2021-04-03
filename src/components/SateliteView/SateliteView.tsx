import { useImage } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { FC, useEffect, useState } from "react";
import { getSateliteViewUrl } from "../../adapters/earthImagery/earthImagery";
import { MIN_DIM_VALUE } from "../../config/earthImagery";
import { MIN_ZOOM_VALUE } from "../../config/geocoder";
import { useViewportState } from "../../hooks/useViewport";
import { GLviewport } from "../../providers/viewport";
import { getSateliteDimValue } from "../../util/getSateliteViewDimValue";
import { Image, useColorModeValue } from "@chakra-ui/react";
import { Loader } from "../common/Loader";

interface SateliteViewProps {
  userViewport: GLviewport;
}

export const SateliteView: FC<SateliteViewProps> = ({ userViewport }) => {
  // const viewport = useViewportState();
  // const [sateliteViewport, setSateliteViewport] = useState(userViewport);
  // const [sateliteViewUrl, setSateliteViewUrl] = useState("");
  // const [sateliteDimValue, setSateliteDimValue] = useState(MIN_DIM_VALUE);

  const viewport = useViewportState();
  const [sateliteViewport, setSateliteViewport] = useState(userViewport);
  const [sateliteViewUrl, setSateliteViewUrl] = useState("");
  const [sateliteDimValue, setSateliteDimValue] = useState(MIN_DIM_VALUE);

  const backGroundColorMode = useColorModeValue("gray.200", "gray.900");

  // const handleSateliteViewUrlChange = () => {
  //   const dimValue = getSateliteDimValue(viewport.zoom);

  //   setSateliteViewport(viewport);
  //   setSateliteDimValue(dimValue);
  //   setSateliteViewUrl(
  //     getSateliteViewUrl(viewport.latitude, viewport.longitude, dimValue)
  //   );
  // };

  useEffect(() => {
    const dimValue = getSateliteDimValue(viewport.zoom);

    setSateliteViewport(viewport);
    setSateliteDimValue(dimValue);
    setSateliteViewUrl(
      getSateliteViewUrl(viewport.latitude, viewport.longitude, dimValue)
    );
  }, [userViewport]);

  const handleSateliteViewUrlChange = () => {
    const dimValue = getSateliteDimValue(viewport.zoom);

    setSateliteViewport(viewport);
    setSateliteDimValue(dimValue);
    setSateliteViewUrl(
      getSateliteViewUrl(viewport.latitude, viewport.longitude, dimValue)
    );
  };

  // const status = useImage({
  //   src: getSateliteViewUrl(
  //     sateliteViewport.latitude,
  //     sateliteViewport.longitude,
  //     sateliteDimValue
  //   ),
  // });

  const status = useImage({
    src: getSateliteViewUrl(
      sateliteViewport.latitude,
      sateliteViewport.longitude,
      sateliteDimValue
    ),
  });

  return (
    // <>
    //   STATUS: {status}
    //   satelite dim: {sateliteDimValue}
    //   {status === "loaded" ? <img src={sateliteViewUrl} /> : <Spinner />}
    //   <button onClick={handleSateliteViewUrlChange}>YOO</button>
    // </>
    <Box width="100%" height="100%" backgroundColor={backGroundColorMode}>
      {status === "loaded" ? (
        <Image
          height="100%"
          width="100%"
          objectFit="cover"
          src={sateliteViewUrl}
        />
      ) : (
        <Loader />
      )}
    </Box>
  );
};
