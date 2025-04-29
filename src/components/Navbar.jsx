import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <nav className="bg-white shadow p-4 sticky top-0 z-50">
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

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FaShoppingCart
              size={24}
              className="text-gray-700 hover:text-blue-600"
            />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          </Link>

          {/* Profile Icon */}
          <Link to="/auth">
            <IoPersonCircle
              size={28}
              className="text-gray-700 hover:text-blue-600"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
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
        </div>
      )}
    </nav>
  );
}
