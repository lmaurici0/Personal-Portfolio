import React from 'react';

import styles from "../../assets/css/SectionSkill.module.css";
import Card from "../layout/Card";
import mysql from "../../assets/img/backend_skills/MySQL.svg";
import python from "../../assets/img/backend_skills/python.svg";
import cpp from "../../assets/img/backend_skills/cpp.svg";
import js from "../../assets/img/backend_skills/js.svg";
import node from "../../assets/img/backend_skills/nodeJs.svg";
import sqlServer from "../../assets/img/backend_skills/sqlServer.svg";
import html from "../../assets/img/frontend_skills/html.svg";
import css from "../../assets/img/frontend_skills/css.svg";
import react from "../../assets/img/frontend_skills/react.svg";
import bootstrap from "../../assets/img/frontend_skills/bootstrap.svg";
import sass from "../../assets/img/frontend_skills/sass.svg";
import tailwind from "../../assets/img/frontend_skills/tailwind.svg";

function SectionSkill() {
  return (
    <>
      <section>
        <h2>Habilidades</h2>
        <span>Back-End Skills</span>

        <div className={styles.skills_section}>
          <Card 
            logo={python} 
            className={styles.skill_pic} 
            title="Python Logo"
            text="Python"
          />

          <Card 
            logo={js} 
            className={styles.skill_pic} 
            title="JavaScript Logo"
            text="JavaScript"
          />
          <Card
            logo={cpp} 
            className={styles.skill_pic} 
            title="C++ Logo"
            text="C++"
          />
        </div>

        <div className={styles.skills_section}>
          <Card 
            logo={node} 
            className={styles.skill_pic} 
            title="NodeJs Logo"
            text="NodeJs"
          />

          <Card 
            logo={mysql} 
            className={styles.skill_pic} 
            title="MySQL Logo"
            text="MySQL Database"
          />

          <Card 
            logo={sqlServer} 
            className={styles.skill_pic} 
            title="Microsoft SQL Server Logo"
            text="SQL Server"
          />
        </div>

        <div className={styles.frontend_skills}>
          <span className={styles.span_frontend}>Front-End Skills</span>

          <div className={styles.skills_section}>
            <Card 
                logo={html} 
                className={styles.skill_pic} 
                title="HTML 5 Logo"
                text="HTML 5"
            />
            <Card 
                logo={css} 
                className={styles.skill_pic} 
                title="CSS 3 Logo"
                text="CSS 3"
            />
            <Card 
                logo={bootstrap} 
                className={styles.skill_pic} 
                title="Bootstrap 5 Logo"
                text="Bootstrap 5"
            />
          </div>

          <div className={styles.skills_section}>
            <Card 
                logo={sass} 
                className={styles.skill_pic} 
                title="Sass Logo"
                text="Sass"
            />
            <Card 
                logo={tailwind} 
                className={styles.skill_pic} 
                title="Tailwind CSS Logo"
                text="Tailwind"
            />
            <Card 
                logo={react} 
                className={styles.skill_pic} 
                title="React Js Logo"
                text="ReactJs"
            />
          </div>

        </div>

      </section>
    </>
  );
}

export default SectionSkill;
