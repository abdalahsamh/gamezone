import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCartStore } from "../store/cartStore";
import { FaCcVisa, FaMoneyBillWave } from "react-icons/fa";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cashName, setCashName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  const validateVisaForm = () => {
    const newErrors = {};

    if (!cardNumber.trim() || !/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
    }

    if (!cardName.trim()) {
      newErrors.cardName = "Cardholder name is required";
    }

    if (!expiryDate.trim() || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = "Please enter a valid expiry date (MM/YY)";
    }

    if (!cvv.trim() || !/^\d{3,4}$/.test(cvv)) {
      newErrors.cvv = "Please enter a valid CVV (3 or 4 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (!paymentMethod) {
      Swal.fire({
        icon: "warning",
        title: "Please select a payment method",
        confirmButtonText: "OK",
      });
      return;
    }

    const newErrors = {};

    if (paymentMethod === "visa" && !validateVisaForm()) {
      return;
    } else if (paymentMethod === "cash") {
      if (!cashName.trim()) {
        newErrors.cashName = "Name is required";
      }
      if (!address.trim()) {
        newErrors.address = "Address is required";
      }
      if (!/^\d{11}$/.test(phone)) {
        newErrors.phone = "Enter a valid 11-digit phone number";
      }

      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) return;
    }

    Swal.fire({
      icon: "success",
      title: "Payment Confirmed",
      text: `You chose ${
        paymentMethod === "visa" ? "Visa" : "Cash on Delivery"
      }`,
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      clearCart();
      navigate("/ThankYou");
    });
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    }
    return value;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    setExpiryDate(value);
  };

  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Method</h2>

        <div className="space-y-4">
          {/* Visa Option */}
          <div
            className={`border rounded p-4 cursor-pointer ${
              paymentMethod === "visa" ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setPaymentMethod("visa")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="visa"
                checked={paymentMethod === "visa"}
                readOnly
                className="mr-2"
              />
              <FaCcVisa className="text-blue-800 text-2xl mr-2" />
              <span>Visa</span>
            </div>

            {paymentMethod === "visa" && (
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className={`w-full p-2 border rounded ${
                      errors.cardNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cardNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cardNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Enter your name"
                    className={`w-full p-2 border rounded ${
                      errors.cardName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cardName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cardName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={handleExpiryChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className={`w-full p-2 border rounded ${
                        errors.expiryDate ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.expiryDate && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.expiryDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) =>
                        setCvv(e.target.value.replace(/\D/g, ""))
                      }
                      placeholder="123"
                      maxLength={4}
                      className={`w-full p-2 border rounded ${
                        errors.cvv ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.cvv && (
                      <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cash Option */}
          <div
            className={`border rounded p-4 cursor-pointer ${
              paymentMethod === "cash" ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setPaymentMethod("cash")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                readOnly
                className="mr-2"
              />
              <FaMoneyBillWave className="text-green-600 text-2xl mr-2" />
              <span>Cash on Delivery</span>
            </div>

            {paymentMethod === "cash" && (
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={cashName}
                    onChange={(e) => setCashName(e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full p-2 border rounded ${
                      errors.cashName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.cashName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.cashName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className={`w-full p-2 border rounded ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))
                    }
                    placeholder="01xxxxxxxxx"
                    maxLength={11}
                    className={`w-full p-2 border rounded ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handleConfirm}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
