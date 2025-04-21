import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero section with background image */}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: "url('/gaming-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h2 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
            Welcome to GameZone
          </h2>

          <p className="text-lg mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Explore top gaming gear, consoles, and accessories!
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Browse Products
          </Link>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-white shadow mt-10 p-6 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            © {new Date().getFullYear()} GameZone. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
