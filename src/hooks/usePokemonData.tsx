import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AsyncDispatch, fetchPokemonDetails } from "../store/thunk";
import { RootState } from "../store";

const usePokemonData = (pokemonName: string | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch: AsyncDispatch = useDispatch();

  const pokemonData = useSelector(
    (state: RootState) => state.pokemon.pokemonDetails
  );

  const pokemonDetails = pokemonData[pokemonName || ""];

  useEffect(() => {
    const fetchData = async () => {
      if (!pokemonName) return;
      if (!pokemonDetails) {
        setIsLoading(true);
        try {
          await dispatch(fetchPokemonDetails(pokemonName));
        } catch (error) {
          console.error("Error fetching Pokemon details:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [dispatch, pokemonName, pokemonDetails]);

  return { isLoading, pokemonData: pokemonDetails };
};

export default usePokemonData;
