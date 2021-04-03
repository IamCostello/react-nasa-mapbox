import { useImage } from "@chakra-ui/image";
import { Spinner } from "@chakra-ui/spinner";
import React, { FC, useState } from "react";
import { getSateliteViewUrl } from "../../adapters/earthImagery/earthImagery";
import { MIN_DIM_VALUE } from "../../config/earthImagery";
import { MIN_ZOOM_VALUE } from "../../config/geocoder";
import { useViewportState } from "../../hooks/useViewport";
import { GLviewport } from "../../providers/viewport";
import { getSateliteDimValue } from "../../util/getSateliteViewDimValue";

interface SateliteViewProps {}

export const SateliteView: FC<SateliteViewProps> = ({}) => {
  const viewport = useViewportState();
  const [sateliteViewport, setSateliteViewport] = useState(viewport);
  const [sateliteViewUrl, setSateliteViewUrl] = useState("");
  const [sateliteDimValue, setSateliteDimValue] = useState(MIN_DIM_VALUE);
  // const [loadingUrl, setLoadingUrl] = useState(false);

  const handleSateliteViewUrlChange = () => {
    const dimValue = getSateliteDimValue(viewport.zoom);

    setSateliteViewport(viewport);
    setSateliteDimValue(dimValue);
    setSateliteViewUrl(
      getSateliteViewUrl(viewport.latitude, viewport.longitude, dimValue)
    );
  };

  const status = useImage({
    src: getSateliteViewUrl(
      sateliteViewport.latitude,
      sateliteViewport.longitude,
      sateliteDimValue
    ),
  });

  return (
    <>
      STATUS: {status}
      satelite dim: {sateliteDimValue}
      {status === "loaded" ? <img src={sateliteViewUrl} /> : <Spinner />}
      <button onClick={handleSateliteViewUrlChange}>YOO</button>
    </>
  );
};
