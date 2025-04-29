import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      addToCart: (product) => {
        const newProduct = { ...product, quantity: 1 };
        set({ cartItems: [...get().cartItems, newProduct] });
      },

      removeFromCart: (id) => {
        const updatedCart = get().cartItems.filter((item, index) => item.id !== id || index !== 0);
        set({ cartItems: updatedCart });
      },

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
