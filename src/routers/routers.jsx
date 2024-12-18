import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/home";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Home />} />
        <Route path="/ourteam" element={<Home />} />
        <Route path="/investmentapproach" element={<Home />} />
        <Route path="/contactus" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
