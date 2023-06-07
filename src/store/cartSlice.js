import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    books: [], 
    countBooks: 0 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
      state.countBooks = state.books.length;
    },
    deleteBook(state, action) {
      state.books = state.books.filter(book => book.id !== action.payload);
      state.countBooks = state.books.length;
    },
    clearCart(state, action) {
      state.books = [];
      state.countBooks = 0;
    }
  },
})

export const { addBook, deleteBook, clearCart } = cartSlice.actions
export default cartSlice.reducer