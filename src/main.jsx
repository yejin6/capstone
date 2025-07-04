import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Display from "./display";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Display></Display>
  </StrictMode>
);