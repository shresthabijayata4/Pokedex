import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const pokeSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPoke: (state, action) => {
      state.push(action.payload); // Add a new book to the state
    },
    removePoke: (state, action) => {
      //   return state.filter((book) => book.id !== action.payload); // Remove a book from the state
    },
  },
});
export const { addPoke, removePoke } = pokeSlice.actions;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default pokeSlice.reducer;
