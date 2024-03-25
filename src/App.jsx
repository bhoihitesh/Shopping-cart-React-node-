import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Pages/Home.jsx";
import { Route, Router, Routes } from "react-router-dom";
import Cart from "./Pages/Cart.jsx";
const App = () => {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App
