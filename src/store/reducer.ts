import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { setPokemonDetails, setPokemonList } from "./actions";
import { AppState } from "../types/types";

const initialState: AppState = {
  pokemonList: [],
  pokemonDetails: {},
};

const pokemonReducer = createReducer(initialState, {
  [setPokemonList.type]: (state, action) => {
    state.pokemonList = action.payload;
  },
  [setPokemonDetails.type]: (state, action) => {
    const { name, data } = action.payload;
    state.pokemonDetails[name] = data;
  },
});

const reducer = combineReducers({
  pokemon: pokemonReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;
