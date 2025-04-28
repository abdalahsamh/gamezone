import { useCartStore } from "../store/cartStore";

export default function AddToCart({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
    >
      Add to Cart
    </button>
  );
}
