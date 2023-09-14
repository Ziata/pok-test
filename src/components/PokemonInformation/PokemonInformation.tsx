import { PokemonDetails } from "../../types/types";
import styles from "./pokemon-information.module.sass";

const PokemonInformation = ({
  pokemonDetails,
}: {
  pokemonDetails: PokemonDetails;
}) => {
  function renderImages(obj: PokemonDetails["sprites"]) {
    return Object.values(obj).map((value, index) => {
      if (typeof value === "string") {
        return (
          <div key={index}>
            <img src={value} alt={`Image ${index}`} />
          </div>
        );
      }
    });
  }

  return (
    <div className={styles.DetailsContainer}>
      <h2>{pokemonDetails.name}</h2>
      <div className={styles.ImagesContainer}>
        {renderImages(pokemonDetails.sprites)}
      </div>
      <div className={styles.InformationContainer}>
        <div className={styles.TextContainer}>
          <h5>Stats</h5>
          <div className={styles.Text}>
            {pokemonDetails.stats.map((item, index) => (
              <li key={index}>
                {item.stat.name} <strong>{item.base_stat}</strong>
              </li>
            ))}
          </div>
        </div>
        <div className={styles.TextContainer}>
          <h5>Moves</h5>
          <div className={styles.Text}>
            {pokemonDetails.moves.map((item, index) => (
              <span key={item.move.name}>
                {item.move.name}
                {index !== pokemonDetails.moves.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInformation;
