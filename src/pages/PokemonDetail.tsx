import Layout from "../components/Layout/Layout";
import PokemonInformation from "../components/PokemonInformation/PokemonInformation";
import styles from "../components/GallereyGrid/gallerey-grid.module.sass";
import Loader from "../components/Loader/Loader";
import usePokemonData from "../hooks/usePokemonData";

const PokemonDetail = () => {
  const pathname = window.location.pathname;
  const pokemonName = pathname.split("/").pop();

  const { isLoading, pokemonData } = usePokemonData(pokemonName);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : !pokemonData ? (
        <div className={styles.notFound}>No Pokemon data found.</div>
      ) : (
        <PokemonInformation pokemonDetails={pokemonData} />
      )}
    </Layout>
  );
};

export default PokemonDetail;
