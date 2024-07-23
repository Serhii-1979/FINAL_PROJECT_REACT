import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  addedProducts: [], // массив для хранения id добавленных продуктов
  products: [], // массив для хранения объектов добавленных продуктов
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    addProduct: (state, action) => {
      const product = action.payload;
      if (product && product.id && !state.addedProducts.includes(product.id)) {
        state.addedProducts.push(product.id);
        state.products.push(product);
        state.count += 1;
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.addedProducts = state.addedProducts.filter(id => id !== productId);
      state.products = state.products.filter(product => product.id !== productId);
      state.count -= 1;
    },
  },
});

export const { increment, addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
