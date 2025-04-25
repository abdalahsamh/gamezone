import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Accessories from "./pages/Accessories";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Games from "./pages/Games";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/products" element={<Products />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
