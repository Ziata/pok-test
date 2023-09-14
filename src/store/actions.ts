import { createAction } from "@reduxjs/toolkit";
import { PokemonDetails, PokemonList } from "../types/types";

export const setPokemonList = createAction<PokemonList[]>("SET_POKEMON_LIST");
export const setPokemonDetails = createAction<{
  name: string;
  data: PokemonDetails;
}>("SET_POKEMON_DETAILS");
