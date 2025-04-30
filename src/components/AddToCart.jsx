import React from "react";
import Swal from "sweetalert2";
import { useCartStore } from "../store/cartStore";

const AddToCart = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleClick = () => {
    addToCart(product);
    Swal.fire({
      title: `${product.title}`,
      text: "Added to cart successfully!",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;