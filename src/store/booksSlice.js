import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    list: [], 
    constantList: []
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    updateListBooks(state, action) {
        state.list = action.payload;
    },
    setconstantListBooks(state, action) {
      state.constantList = action.payload;
  }
  },
})

export const { updateListBooks, setconstantListBooks } = booksSlice.actions
export default booksSlice.reducer