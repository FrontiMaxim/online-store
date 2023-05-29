import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import booksSlice from './booksSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    books: booksSlice
  },
})

export default store;