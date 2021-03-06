import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./routes/home";
import Booking from "./routes/booking";
import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
