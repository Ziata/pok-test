import styles from "./gallerey-item.module.sass";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import { IGallereyItem } from "../../../types/types";
import usePokemonData from "../../../hooks/usePokemonData";

const GallereyItem = ({ item }: { item: IGallereyItem }) => {
  const { name } = item;

  const { isLoading, pokemonData } = usePokemonData(name);

  if (isLoading) {
    return (
      <div className={styles.IGallereyItem}>
        <Loader />
      </div>
    );
  }

  if (!pokemonData) return null;

  const itemStyle = {
    gridArea: `span ${item.row} / span ${item.col} / auto / auto`,
    backgroundImage: `url(${pokemonData.sprites.front_default})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Link
      to={`/pokemon/${item.name}`}
      style={itemStyle}
      className={styles.IGallereyItem}
    >
      <div className={styles.IGallereyItemContainer}>{item.name}</div>
    </Link>
  );
};

export default GallereyItem;
