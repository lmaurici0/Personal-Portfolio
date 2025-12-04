import React from "react";
import styles from "../Introduction/Introduction.module.css";

import profile_pic from "../../../assets/images/profile.png";

function Introduction() {
  return (
    <>
      <section>
        <div className={styles.about}>
          <img
            src={profile_pic}
            alt="Profile picture"
            className={styles.profile_pic}
          />
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Nice to meet you, I am</h1>
            <h2 className={styles.name}>
              Eric <strong>Mauricio</strong>
            </h2>
          </div>
        </div>

        <div className={styles.aboutMe}>
          <p>Back-End developer.</p>
        </div>

        <div className={styles.skills}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"
            title="Spring Boot"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
            title="Python"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
            title=".NET C#"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            title="React JS"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg"
            title="Angular JS"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            title="MySQL"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg"
            title="SQL Server"
          />
        </div>
      </section>

    </>
  );
}

export default Introduction;
