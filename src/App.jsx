import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./SalonHome.css";

import NavBar from "./components/NavBar";
import Home from "./SalonHome";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="site-container">
      <NavBar />

      <main className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Root />);