import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import "./index.css";
import Preguntas from "./Preguntas";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/preguntas" element={<Preguntas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
