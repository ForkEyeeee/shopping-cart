import React from "react";
import ReactDOM from "react-dom/client";
import RouterConfig from "./routes/router";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    base: "20em", // 320px
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  components: {
    Popover: {
      variants: {
        responsive: {
          popper: {
            maxWidth: "unset",
            width: "unset",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterConfig />
    </ChakraProvider>
  </React.StrictMode>
);
