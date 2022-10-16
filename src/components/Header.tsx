import styles from "./Header.module.css";
import rocketLogo from "../assets/rocketlogo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src={rocketLogo}
        alt=""
      />
      <h1>
        <strong>to</strong>do
      </h1>
    </header>
  );
}
