import ThemeButton from "./ThemeButton";
import styles from "../../assets/css/Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.buttons}>
          <ThemeButton  />
        </div>
      </header>
    </>
  );
}

export default Header;
