<<<<<<< Updated upstream
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Display from "./Display";
import styled from "styled-components";

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8
`

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Frame>
      <Display></Display>
    </Frame>
  </StrictMode>
);
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header title="기록" />
  </StrictMode>
);
>>>>>>> Stashed changes
