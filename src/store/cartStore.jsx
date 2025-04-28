import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
}));
