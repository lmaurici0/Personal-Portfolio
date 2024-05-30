import styles from "../../assets/css/Footer.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Input from "./Input";
import Button from "./Button";
import DownloadButton from "./DonwloadButton";
function Footer() {
  return (
    <>
      <footer>
        <span className={styles.spanContact}>Podemos conversar por:</span>
        <div className={styles.social_media}>
          <a href="https://www.instagram.com/lmaurici0">
            <FaInstagram className={styles.icon} title="Instagram" />
          </a>

          <a href="https://www.linkedin.com/in/ericmaurici0">
            <FaLinkedin className={styles.icon} title="Linkedin" />
          </a>

          <a href="mailto:ericluismauricio@gmail.com">
            <SiGmail className={styles.icon} title="Gmail" />
          </a>
        </div>

        <span className={styles.spanContact}>Ou por WhatsaApp</span>
        <Input />
        <Button text="Enviar Mensagem" />

        <DownloadButton />
      </footer>
      <div className={styles.others}>
        <p>
          Todos os direitos reservados à Eric Luis da Silva Mauricio - &copy;
          2024
        </p>
      </div>
    </>
  );
}

export default Footer;
