import { useImage } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import React, { FC, useEffect, useState } from "react";
import { getSateliteViewUrl } from "../../adapters/earthImagery/earthImagery";
import { MIN_DIM_VALUE } from "../../config/earthImagery";
import { useViewportState } from "../../hooks/useViewport";
import { GLviewport } from "../../providers/viewport";
import { getSateliteDimValue } from "../../util/getSateliteViewDimValue";
import { Image, useColorModeValue } from "@chakra-ui/react";
import { Loader } from "../common/Loader";
import { WarningIcon } from "@chakra-ui/icons";
import { Warning } from "../common/Warning";

interface SateliteViewProps {
  userViewport: GLviewport;
}

/**
 * React component used to display Nasa's Earth Imagery repository image
 * @param {GLviewport} userViewport - user selected viewport
 */
export const SateliteView: FC<SateliteViewProps> = ({ userViewport }) => {
  const viewport = useViewportState();
  const [sateliteViewport, setSateliteViewport] = useState(userViewport);
  const [sateliteViewUrl, setSateliteViewUrl] = useState("");
  const [sateliteDimValue, setSateliteDimValue] = useState(MIN_DIM_VALUE);

  const backGroundColorMode = useColorModeValue("gray.200", "gray.900");

  useEffect(() => {
    const dimValue = getSateliteDimValue(viewport.zoom);

    setSateliteViewport(viewport);
    setSateliteDimValue(dimValue);
    setSateliteViewUrl(
      getSateliteViewUrl(viewport.latitude, viewport.longitude, dimValue)
    );
  }, [userViewport]);

  const status = useImage({
    src: getSateliteViewUrl(
      sateliteViewport.latitude,
      sateliteViewport.longitude,
      sateliteDimValue
    ),
  });

  return (
    <Box width="100%" height="100%" backgroundColor={backGroundColorMode}>
      {status === "loading" && <Loader />}
      {status === "failed" && <Warning />}
      {status === "loaded" && (
        <Image
          height="100%"
          width="100%"
          objectFit="cover"
          src={sateliteViewUrl}
          fallback={<WarningIcon />}
        />
      )}
    </Box>
  );
};
