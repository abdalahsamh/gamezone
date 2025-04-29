import React from 'react';
import { useCartStore } from '../store/cartStore';

const AddToCart = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
