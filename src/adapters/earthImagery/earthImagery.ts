const BASE_URL = "https://api.nasa.gov/planetary/earth/imagery";
const API_TOKEN = process.env.REACT_APP_NASA_TOKEN;

export const getSateliteViewUrl = (
  latitude: number,
  longitude: number,
  dim: number
) => {
  return `${BASE_URL}?api_key=${API_TOKEN}&dim=${dim}&lat=${latitude}&lon=${longitude}`;
};
