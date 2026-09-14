import React from "react";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Heritage from "./components/Heritage";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Vision from "./components/Vision";
import Footer from "./components/Contact.jsx";

import Soon from "./components/Soon";

import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>

        Home Page
        <Route
          path="/"
          element={
            <div className="font-poppins">
              <Navbar />
              <Home />
              <About />
              <Products />
              <WhyChooseUs />
              <Heritage />
              <Gallery />
              <Testimonials />
              <Vision />
              <Footer />
            </div>
          }
        />

        Soon Page
        <Route path="/soon" element={<Soon />} />

      </Routes>
    </>
  );
}

export default App;