import { Link } from "react-router-dom";
import logo from "@src/assets/img/logo.svg";
import styles from "./header.module.sass";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} className={styles.logo} alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
