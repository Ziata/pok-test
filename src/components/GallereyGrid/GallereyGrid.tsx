import GallereyItem from "./components/GallereyItem";
import styles from "./gallerey-grid.module.sass";
import { generateGalleryLayout } from "./functions";
import { PokemonList } from "../../types/types";

const GallereyGrid = ({ pokemonList }: { pokemonList: PokemonList[] }) => {
  if (!pokemonList.length)
    return <div className={styles.notFound}>No item found</div>;

  const layout = generateGalleryLayout(pokemonList);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryGrid}>
        {layout.map((item) => (
          <GallereyItem item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default GallereyGrid;
