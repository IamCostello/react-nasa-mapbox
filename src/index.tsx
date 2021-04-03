import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { ViewportProvider } from "./providers/viewport";
import nightMode from "./theme/theme";

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
