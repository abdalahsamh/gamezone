import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (product) => {
        // تأكد إن السعر رقم
        const numericPrice =
          typeof product.price === "string"
            ? Number(product.price.replace(/[^0-9.-]+/g, ""))
            : product.price;

        const existing = get().cartItems.find((item) => item.id === product.id);

        if (existing) {
          set({
            cartItems: get().cartItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cartItems: [
              ...get().cartItems,
              { ...product, price: numericPrice, quantity: 1 },
            ],
          });
        }
      },
      removeFromCart: (id) =>
        set({
          cartItems: get().cartItems.filter((item) => item.id !== id),
        }),
      clearCart: () => set({ cartItems: [] }),
      updateQuantity: (id, quantity) =>
        set({
          cartItems: get().cartItems.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }),
    }),
    {
      name: "cart-storage", // اسم المفتاح في localStorage
    }
  )
);
