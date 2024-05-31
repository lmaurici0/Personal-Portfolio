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
          />

          <Card 
            logo={js} 
            className={styles.skill_pic} 
            title="JavaScript Logo"
          />
          <Card
            logo={cpp} 
            className={styles.skill_pic} 
            title="C++ Logo"
          />
        </div>

        <div className={styles.skills_section}>
          <Card 
            logo={node} 
            className={styles.skill_pic} 
            title="NodeJs Logo"
          />

          <Card 
            logo={mysql} 
            className={styles.skill_pic} 
            title="MySQL Logo"
          />

          <Card 
            logo={sqlServer} 
            className={styles.skill_pic} 
          />
        </div>

        <div className={styles.frontend_skills}>
          <span className={styles.span_frontend}>Front-End Skills</span>

          <div className={styles.skills_section}>
            <Card 
                logo={html} 
                className={styles.skill_pic} 
                title="HTML 5 Logo"
    
            />
            <Card 
                logo={css} 
                className={styles.skill_pic} 
                title="CSS 3 Logo"
  
            />
            <Card 
                logo={bootstrap} 
                className={styles.skill_pic} 
                title="Bootstrap 5 Logo"
              
            />
          </div>

          <div className={styles.skills_section}>
            <Card 
                logo={sass} 
                className={styles.skill_pic} 
                title="Sass Logo"
            />
            <Card 
                logo={tailwind} 
                className={styles.skill_pic} 
                title="Tailwind CSS Logo"
            />
            <Card 
                logo={react} 
                className={styles.skill_pic} 
                title="React Js Logo"
            />
          </div>

        </div>

      </section>
    </>
  );
}

export default SectionSkill;
