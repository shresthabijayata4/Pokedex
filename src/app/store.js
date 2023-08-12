import { configureStore } from "@reduxjs/toolkit";
// import pokeReducer from "../features/counter/counterSlice";
import pokeReducer from "../Components/pokeSlice";

const store = configureStore({
  reducer: {
    pokemon: pokeReducer,
  },
});

export default store;
