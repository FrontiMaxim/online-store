import { createSlice } from '@reduxjs/toolkit';
import calculateTotal from '../features/calculateTotal';

const initialState = { 
    price: 0,
    books: [],
    bankCard: {
        number: '',
        date: '',
        cvv: ''
    },
    address: '',
    personalData: {
        name: '',
        email: '',
        phone: ''
    }
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addBooks(state, action) {
        state.books = [...action.payload];
        state.price = calculateTotal(state.books);
    },
    addBankCard(state, action) {
        state.bankCard = action.payload;
    },
    addAddress(state, action) {
        state.address = action.payload;
    },
    addPersonalData(state, action) {
        state.personalData = action.payload;
    }
  },
})

export const { addBooks, addBankCard, addAddress, addPersonalData } = orderSlice.actions;
export default orderSlice.reducer;