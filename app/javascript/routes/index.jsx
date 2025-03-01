import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Content from "../components/Content";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/content" element={<Content />} />
    </Routes>
  </Router>
);