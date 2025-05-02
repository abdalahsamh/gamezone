import Swal from "sweetalert2";
import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useCartStore();
  const navigate = useNavigate();

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

  const handlePayment = () => {
    Swal.fire({
      title: "Processing...",
      text: "Please wait",
      icon: "info",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      clearCart();
      navigate("/thank-you");
    });
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
                className="bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                {/* Product Image + Info */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.title || item.name}
                    </h2>
                    <p className="text-gray-500">Price: ${item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="font-bold min-w-[20px] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>

                {/* Price + Remove */}
                <div className="text-right">
                  <p className="font-bold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 text-sm mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total & Buttons */}
          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </h2>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={clearCart}
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Clear Cart
              </button>
              <button
                onClick={handlePayment}
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
