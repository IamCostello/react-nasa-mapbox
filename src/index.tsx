import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { ViewportProvider } from "./providers/viewport";
import nightMode from "./theme/theme";
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ViewportProvider>
        <ColorModeScript initialColorMode={nightMode.config.initialColorMode} />
        <App />
      </ViewportProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
