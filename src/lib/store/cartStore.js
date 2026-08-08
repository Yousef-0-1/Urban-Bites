import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (cartItem, quantity = 1) =>
        set((state) => {
          const existingMeal = state.cart.find(
            (item) => item.id === cartItem.id,
          );
          if (existingMeal) {
            return {
              cart: state.cart.map((item) =>
                item.id === cartItem.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }
          return {
            cart: [...state.cart, { ...cartItem, quantity }],
          };
        }),
      removeFromCart: (cartItem) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== cartItem),
        }));
      },
      emptyCart: () => {
        set(() => ({
          cart: [],
        }));
      },
    }),
    {
      name: "meals",
    },
  ),
);
