import Swal from "sweetalert2";
import { useCartStore } from "../store/cartStore";
export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useCartStore();

  const handleRemove = (id) => {
    removeFromCart(id);
    Swal.fire({
      title: "Removed!",
      text: "Product removed from cart.",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  };

  const handleIncrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const handleDecrease = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
      updateQuantity(id, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price);
      return total + (isNaN(price) ? 0 : price * item.quantity);
    }, 0);
  };

  return (
    <div className="p-6 min-h-[72vh] bg-gradient-to-b from-gray-100 to-gray-300">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.title || item.name}`}
                className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.title || item.name}
                    </h2>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span className="font-bold">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="px-3 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 text-sm mt-2 hover:underline decoration-red-500 decoration-2 transition-all duration-200"
                  >
                    <span className="relative text-red-500 text-sm mt-2 inline-block group cursor-pointer">
                      Remove
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </h2>
            <button
              onClick={clearCart}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
