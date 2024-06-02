import React from "react";
import styles from "../../assets/css/Button.module.css";

function DownloadButton() {
  const downloadResume = () => {
    const resumeLink =
      "https://drive.usercontent.google.com/u/0/uc?id=1y3F_dSc4kJUKUTViAov5d0MKGEmb75f7&export=download";
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
