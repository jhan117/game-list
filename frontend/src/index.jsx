import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ModeProvider } from "./store/ModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <App />
      </ModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
