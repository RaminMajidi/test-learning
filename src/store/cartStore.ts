import { create } from "zustand";

type CartStore = {
  items: string[];
  addItem: (item: string) => void;
};

export const userCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
}));
