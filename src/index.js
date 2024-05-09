import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Attendance from "./components/Attendance";

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        {" "}
        {/* Wrap your routes with a <Routes> element */}
        <Route exact path="/" element={<App />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
