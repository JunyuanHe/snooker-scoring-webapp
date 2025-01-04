import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./components/App.js";

// renders React Component "Root" into the DOM element with ID "root"
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// allows for live updating
// module.hot.accept();
