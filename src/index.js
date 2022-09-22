import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SkeletonTheme baseColor="#1e1e1e" highlightColor="#1a1a1a">
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </SkeletonTheme>
  </StrictMode>
);