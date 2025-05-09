import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Accessories from "./pages/Accessories";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Games from "./pages/Games";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import ThankYou from "./pages/ThankYou";
import Checkout from "./pages/Checkout";

export default function App() {
  const location = useLocation();
  const hideNavAndFooterPaths = ["/auth", "/checkout", "/ThankYou"];
  const shouldHideNavAndFooter = hideNavAndFooterPaths.includes(
    location.pathname
  );

  return (
    <>
      {!shouldHideNavAndFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/products" element={<Products />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/ThankYou" element={<ThankYou />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {!shouldHideNavAndFooter && <Footer />}
    </>
  );
}
