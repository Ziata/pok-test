import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "./reducer";
import { Action } from "redux";
import { setPokemonList } from "./actions";
import { PokemonList } from "../types/types";

export type AsyncDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

const API_BASE_URL = "https://pokeapi.co/api/v2/";

const fetchPokemonList =
  (type: string = "") =>
  async (dispatch: AsyncDispatch) => {
    try {
      const url = type
        ? `${API_BASE_URL}type/${type}`
        : `${API_BASE_URL}pokemon?limit=10000&offset=0`;
      const response = await axios.get(url);
      const pokemonList = type
        ? response.data.pokemon.map((pokemon: { pokemon: PokemonList }) => ({
            url: pokemon.pokemon.url,
            name: pokemon.pokemon.name,
          }))
        : response.data.results;

      dispatch(setPokemonList(pokemonList));
    } catch (error) {
      console.error(error);
    }
  };

const fetchPokemonDetails =
  (name: string) =>
  async (dispatch: AsyncDispatch, getState: () => RootState) => {
    const { pokemon } = getState();
    if (pokemon.pokemonDetails[name]) {
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}pokemon/${name}`);
      const pokemonData = response.data;
      dispatch({
        type: "SET_POKEMON_DETAILS",
        payload: { name, data: pokemonData },
      });
      return pokemonData.name;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

export { fetchPokemonList, fetchPokemonDetails };
