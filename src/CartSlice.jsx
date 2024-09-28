import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload
      const findItem = state.items.find(item => item.name === name)
      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.items.push({name, image, cost, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => action.payload.name !== item.name);
    },
    updateQuantity: (state, action) => {
      const updateItem = state.items.find(item => item.name === action.payload.name);
      if (updateItem) {
        updateItem.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
