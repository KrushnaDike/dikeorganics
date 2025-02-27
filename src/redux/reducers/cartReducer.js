import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartRequest: (state) => {
      state.loading = true;
    },
    addToCartSuccess: (state, action) => {
      state.loading = false;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    addToCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    removeFromCartRequest: (state) => {
      state.loading = true;
    },
    removeFromCartSuccess: (state, action) => {
      state.loading = false;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeFromCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateQuantityRequest: (state) => {
      state.loading = true;
    },
    updateQuantitySuccess: (state, action) => {
      state.loading = false;
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    updateQuantityFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearCartRequest: (state) => {
      state.loading = true;
    },
    clearCartSuccess: (state) => {
      state.loading = false;
      state.items = [];
    },
    clearCartFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  addToCartRequest,
  addToCartSuccess,
  addToCartFail,
  removeFromCartRequest,
  removeFromCartSuccess,
  removeFromCartFail,
  updateQuantityRequest,
  updateQuantitySuccess,
  updateQuantityFail,
  clearCartRequest,
  clearCartSuccess,
  clearCartFail,
  clearError,
} = cartSlice.actions;

export default cartSlice.reducer;
