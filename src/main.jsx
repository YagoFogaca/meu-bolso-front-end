import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./global.style";
import { BrowserRouter } from "react-router";
import { RoutesApp } from "./routes/index.routes";
import { Auth } from "./api/index.interceptors";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Auth />
      <GlobalStyle />
      <RoutesApp />
    </BrowserRouter>
  </StrictMode>
);
