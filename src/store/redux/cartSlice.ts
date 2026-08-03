import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartState = {
  items: string[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
