/**
 *
 * @param {number} value - value to normalize
 * @param {number} valueMax - maximum range of normalized value
 * @param {number} valueMin - minimum range of normalized value
 * @param {number} rangeMax - maximum range to normalize
 * @param {number} rangeMin - minimum range to normalize
 * @returns normalized zoom value in [rangeMin; rangeMax] range
 */
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
