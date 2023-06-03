import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import booksSlice from './booksSlice';
import orderSlice from './orderSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    books: booksSlice,
    order: orderSlice
  },
})

export default store;