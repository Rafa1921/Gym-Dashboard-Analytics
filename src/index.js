import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Attendance from "./components/Attendance";
import Login from "./components/Login";
import Register from "./components/Register";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/" element={<App />} /> {/* Default route to login */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
