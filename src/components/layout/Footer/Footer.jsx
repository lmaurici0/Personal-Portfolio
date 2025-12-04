import styles from "../Footer/Footer.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <>
      <footer>
        <span className={styles.spanContact}>Podemos conversar por:</span>

        <div className={styles.social_media}>
          <a href="https://www.linkedin.com/in/ericmaurici0" target="_blank" rel="noreferrer">
            <FaLinkedin className={styles.icon} title="Linkedin" />
          </a>

          <a href="mailto:ericluismauricio@gmail.com">
            <SiGmail className={styles.icon} title="Gmail" />
          </a>

          <a href="https://github.com/lmaurici0" target="_blank" rel="noreferrer">
            <FaGithub className={styles.icon} title="Github" />
          </a>
        </div>

        <a
          href="/cv_eric_Mauricio.pdf"
          download
          className={styles.cv}
        >
          <p className={styles.btn_text}>Download CV</p>
        </a>

        <p className={styles.copy}>
          Todos os direitos reservados à Eric Luis da Silva Mauricio - &copy; 2025
        </p>
      </footer>
    </>
  );
}

export default Footer;
