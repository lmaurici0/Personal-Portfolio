import React from "react";
import styles from "../../assets/css/Button.module.css";

function DownloadButton() {
  const downloadResume = () => {
    const resumeLink =
      "https://drive.usercontent.google.com/u/0/uc?id=1t_dNjkGXU8g7XC1J_eAwVy8V4lA4hKR7&export=download";
    window.open(resumeLink, "_blank");
  };

  return (
    <>
      <button
        className={`${styles.btn} ${styles.margin}`}
        onClick={downloadResume}
      >
        <p className={styles.btn_text}>
          Baixar Currículo
        </p>
      </button>
    </>
  );
}

export default DownloadButton
