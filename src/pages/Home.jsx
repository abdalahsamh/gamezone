import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">GameZone</h1>
        <div className="space-x-4">
          <Link to="/auth" className="text-blue-600 hover:underline">
            Login
          </Link>
          <Link to="/auth" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      </nav>

      {/* Hero section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to GameZone
        </h2>
        <p className="text-lg text-gray-600 mb-6">
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
  );
};

export default Home;
