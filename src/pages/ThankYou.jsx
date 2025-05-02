import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-300 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="bg-white p-8 rounded-xl shadow-lg"
      >
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-green-700 mb-2">Thank You!</h1>
        <p className="text-gray-600">
          Your order has been placed successfully.
        </p>
        <p className="text-sm mt-2 text-gray-500">Redirecting to Home...</p>
      </motion.div>
    </div>
  );
}
