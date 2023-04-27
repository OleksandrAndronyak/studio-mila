import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//! Components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Facial from "./pages/Facial";
import Body from "./pages/Body";
import Foot from "./pages/Foot";
import Laser from "./pages/Laser";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/facial" element={<Facial />} />
        <Route exact path="/body" element={<Body />} />
        <Route exact path="/foot" element={<Foot />} />
        <Route exact path="/laser" element={<Laser />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
