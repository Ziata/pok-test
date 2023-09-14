import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Search from "../components/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { AsyncDispatch, fetchPokemonList } from "../store/thunk";
import { RootState } from "../store/reducer";
import GallereyGrid from "../components/GallereyGrid/GallereyGrid";
import TypeSelect from "../components/TypeSelect/TypeSelect";
import styles from "./styles.module.sass";
import Loader from "../components/Loader/Loader";
import { Options, PokemonList } from "../types/types";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<Options>({
    label: "All",
  });
  const [visiblePokemons, setVisiblePokemons] = useState<number>(20);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const dispatch: AsyncDispatch = useDispatch();

  const pokemonList = useSelector(
    (state: RootState) => state.pokemon.pokemonList
  );

  const handleTypeChange = async (type: Options) => {
    setIsLoading(true);
    setVisiblePokemons(20);
    setSelectedType(type);
    try {
      await dispatch(fetchPokemonList(type.value));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterPokemons = (pokemonList: PokemonList[], query: string) => {
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleScroll = () => {
    if (
      !isLoading &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
    ) {
      setVisiblePokemons((prevVisible) => prevVisible + 20);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchPokemonList());
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredPokemonList = filterPokemons(pokemonList, searchQuery);
  const pokemonsToShow = filteredPokemonList.slice(0, visiblePokemons);

  return (
    <Layout>
      <div className={styles.topBar}>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TypeSelect
          selectedType={selectedType}
          setSelectedType={handleTypeChange}
        />
      </div>
      {isLoading ? <Loader /> : <GallereyGrid pokemonList={pokemonsToShow} />}
    </Layout>
  );
};

export default Home;
