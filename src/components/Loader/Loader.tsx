import pokeball from "@src/assets/img/pokeball.svg";
import styles from "./loader.module.sass";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <img className={styles.image} src={pokeball} alt="loader" />
    </div>
  );
};

export default Loader;
