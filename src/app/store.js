import { configureStore } from "@reduxjs/toolkit";
// import pokeReducer from "../features/counter/counterSlice";
import pokeReducer from "../Components/pokeSlice";

export default configureStore({
  reducer: {
    pokemon: pokeReducer,
  },
});
