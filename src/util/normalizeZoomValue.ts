export const normalizeZoomValue = (
  value: number,
  valueMax: number,
  valueMin: number,
  rangeMax: number,
  rangeMin: number
) => {
  return (
    (rangeMax - rangeMin) * ((value - valueMin) / (valueMax - valueMin)) +
    rangeMin
  );
};
