import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  itemSize: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
      state.itemSize = state.itemSize + 1;
    },
    deleteItems: (state) => {
      state.items = [];
      state.itemSize = 0;
    },
  },
});

export const { addItem, deleteItems } = CartSlice.actions;

export default CartSlice.reducer;
