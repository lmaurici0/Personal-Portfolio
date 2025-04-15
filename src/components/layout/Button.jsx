import styles from "../../assets/css/Button.module.css";

function Button({text}) {
  return (
      <a href="https://wa.me/5511982057151">
        <button>
          <p className={styles.btn_text}>{text}</p>
        </button>
      </a>
  );
}

export default Button;
