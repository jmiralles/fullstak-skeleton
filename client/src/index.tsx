import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
