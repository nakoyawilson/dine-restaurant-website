import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Booking from "./routes/booking";
import "./index.css";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
