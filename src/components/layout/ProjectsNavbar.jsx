import React, { useState } from "react";
import styles from "../../assets/css/ProjectsNavbar.module.css";
import ProjectCard from "../layout/ProjectCard";
import vault from '../../assets/img/vault.jpeg';
import cena from '../../assets/img/cena.jpeg';
import cena_web from '../../assets/img/cena_web.jpeg';
import rpg_js from '../../assets/img/rpg_js.jpeg';
import pokedex from '../../assets/img/pokedex.jpeg';
import space_invaders from '../../assets/img/space_invaders.jpeg';

const projects = [
  {
    category: "Back-End",
    photo: vault,
    title: "Vault",
    description: "Um site de Ponto de Vendas (PDV) feito com Python Flask, MySQL, Js e Bootstrap. Onde você pode armazenar, deletar e editar produtos na sua base de dados.",
    link:"https://github.com/lmaurici0/vault"
  },
  {
    category: "Back-End",
    photo: cena_web,
    title: "Cena Web",
    description: "Um site de gerenciamento de alunos feito com Flask, MySQL e NodeJs. Ainda em fase de desenvolvimento.",
    link:"https://github.com/lmaurici0/cena-web"
  },
  {
    category: "Back-End",
    photo: cena,
    title: "Cena",
    description: "Aplicativo de gerenciamento de alunos feito com Python e SQLite. No qual você pode matricular, desmatricular e atualizar o cadastro dos alunos",
    link:"https://github.com/lmaurici0/cena"
  },
  {
    category: "Back-End",
    photo: pokedex,
    title: "Pokédex Python",
    description: "Python Pokédex onde você poderá ver status e habilidades dos pokémons disponíveis.",
    link:"https://github.com/lmaurici0/pokedex"
  },
  {
    category: "Front-End",
    photo: rpg_js,
    title: "RPG Js",
    description: "RPG em JavaScript onde você tem a missão de salvar a princesa, entre em cavernas, melhore suas armas e derrote o dragão.",
    link:"https://github.com/lmaurici0/rpg-js"
  },
  {
    category: "Front-End",
    photo: space_invaders,
    title: "Space Invaders",
    description: "Remake do popular jogo 'Space Invaders', onde você mata os inimigos para pontuar. Qual o seu máximo?",
    link:"https://github.com/lmaurici0/space-invaders"
  },
];

function ProjectsNavbar() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <div className={styles.headerNavbar}>
        <nav>
          <ul>
            <li onClick={() => setSelectedCategory("Todos")} className={selectedCategory === "Todos" ? styles.selected : ""}>Todos</li>
            <li onClick={() => setSelectedCategory("Front-End")} className={selectedCategory === "Front-End" ? styles.selected : ""}>Front-End</li>
            <li onClick={() => setSelectedCategory("Back-End")} className={selectedCategory === "Back-End" ? styles.selected : ""}>Back-End</li>
          </ul>
        </nav>
      </div>

      <h2 className={styles.title_mobile}>Projetos</h2>

      <div className={styles.Projects}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            photo={project.photo}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectsNavbar;
