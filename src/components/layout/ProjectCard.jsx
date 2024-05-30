import React from "react";
import styles from "../../assets/css/ProjectCard.module.css";

function ProjectCard({ link, title, description, photo, ccAlt }) {
  return (
    <>
      <div className={styles.projectCard}>
        <a href={link}>
          <img src={photo} alt={ccAlt} className={styles.projectPhoto} />
        </a>
        <div className={styles.cardContent}>
          <h2 className={styles.projectTitle}>{title}</h2>
          <p className={styles.projectDescription}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
