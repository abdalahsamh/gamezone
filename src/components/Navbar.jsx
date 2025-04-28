import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold text-blue-600 cursor-default">
          GameZone
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/games" className="text-gray-700 hover:text-blue-600">
            Games
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link to="/accessories" className="text-gray-700 hover:text-blue-600">
            Accessories
          </Link>
        </div>

        {/* Auth & Cart Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FaShoppingCart
              size={24}
              className="text-gray-700 hover:text-blue-600"
            />
            {/* Badge for cart count */}
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          {/* Login Icon */}
          <Link to="/auth">
            <IoPersonCircle
              size={28}
              className="text-gray-700 hover:text-blue-600"
            />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 px-4">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/games" className="block text-gray-700 hover:text-blue-600">
            Games
          </Link>
          <Link
            to="/products"
            className="block text-gray-700 hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            to="/accessories"
            className="block text-gray-700 hover:text-blue-600"
          >
            Accessories
          </Link>
          <Link
            to="/auth"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
