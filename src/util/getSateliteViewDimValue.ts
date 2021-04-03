import { MAX_DIM_VALUE, MIN_DIM_VALUE } from "../config/earthImagery";
import { MAX_ZOOM_VALUE, MIN_ZOOM_VALUE } from "../config/geocoder";
import { normalizeZoomValue } from "./normalizeZoomValue";

export const getSateliteDimValue = (value: number) => {
  const zoomValue = normalizeZoomValue(
    value,
    MAX_ZOOM_VALUE,
    MIN_ZOOM_VALUE,
    MAX_DIM_VALUE,
    MIN_DIM_VALUE
  );

  return Math.max(
    MIN_DIM_VALUE,
    Math.min(MAX_DIM_VALUE, MAX_DIM_VALUE - zoomValue + MIN_DIM_VALUE)
  );
};
