import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  itemSize: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newKey = action.payload;
      if (newKey in state.items) {
        state.items[newKey] = state.items[newKey] + 1;
      } else {
        state.items[newKey] = 1;
        state.itemSize = state.itemSize + 1;
      }
    },
    deleteItems: (state) => {
      state.items = [];
      state.itemSize = 0;
    },
  },
});

export const { addItem, deleteItems } = CartSlice.actions;

export default CartSlice.reducer;
