import React from "react";

import styles from "../../assets/css/Card.module.css";

function Card({ logo, title, text }) {
  return (
      <div className={styles.card_body}>
        <img src={logo} title={title} className={styles.skill_pic} />
        <p className={styles.name}>{text}</p>
    </div>
  );
}

export default Card;
