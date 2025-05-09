import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";
import { FaShoppingCart, FaGamepad } from "react-icons/fa";
import { GiClawHammer, GiConsoleController } from "react-icons/gi";
import { MdHomeFilled } from "react-icons/md";
import { useCartStore } from "../store/cartStore";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartItems = useCartStore((state) => state.cartItems);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", name: "Home", icon: <MdHomeFilled className="mr-2" /> },
    { path: "/games", name: "Games", icon: <FaGamepad className="mr-2" /> },
    {
      path: "/products",
      name: "Products",
      icon: <GiClawHammer className="mr-2" />,
    },
    {
      path: "/accessories",
      name: "Accessories",
      icon: <GiConsoleController className="mr-2" />,
    },
  ];

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="h-16 md:h-14"></div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
        style={{ height: "4rem" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <FaGamepad className="text-blue-600 text-2xl mr-2" />
              <Link to="/">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                  GameZone
                </span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className="relative flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 group transition-all duration-300"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                    <span className="absolute left-1/2 bottom-0 h-0.5 bg-blue-600 w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <Link to="/cart">
                  <FaShoppingCart
                    size={22}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  />
                  {cartItems.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                    >
                      {cartItems.length}
                    </motion.span>
                  )}
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link to="/auth">
                  <IoPersonCircle
                    size={26}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                  />
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-1 rounded-md focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {menuOpen ? (
                  <HiX size={26} className="text-gray-700" />
                ) : (
                  <HiMenu size={26} className="text-gray-700" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm"
              style={{ position: "absolute", width: "100%", top: "4rem" }}
            >
              <motion.div
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
                className="px-4 py-3 space-y-2"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={itemVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center px-3 py-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
