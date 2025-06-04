// src/components/Skills/Skills.jsx
import React from "react";
import SkillCard from "./SkillCard"; // Importamos el componente SkillCard

const skills = [
  {
    name: "HTML",
    imgSrc: "src/assets/img/html.png",
    description: "Desarrollo web con HTML5, semántica y accesibilidad.",
  },
  {
    name: "CSS",
    imgSrc: "src/assets/img/css.png",
    description: "Estilos avanzados con CSS3, Flexbox, Grid y animaciones.",
  },
  {
    name: "JavaScript",
    imgSrc: "src/assets/img/javascript.png",
    description: "Programación interactiva con ES6+, DOM y APIs modernas.",
  },
  {
    name: "React",
    imgSrc: "src/assets/img/react.png",
    description: "Construcción de interfaces dinámicas y reactivas.",
  },
  {
    name: "Node.js",
    imgSrc: "src/assets/img/nodejs.png",
    description: "Desarrollo backend eficiente con Express y APIs RESTful.",
  },
  {
    name: "Python",
    imgSrc: "src/assets/img/python.png",
    description: "Automatización, análisis de datos y scripting.",
  },
  {
    name: "SQL",
    imgSrc: "src/assets/img/sql.png",
    description: "Gestión de bases de datos relacionales.",
  },
  {
    name: "Git & GitHub",
    imgSrc: "src/assets/img/git.png",
    description: "Control de versiones y colaboración en proyectos de software.",
  },
];

const Skills = () => {
  return (
    <section id="habilidades" className="skills-section py-16 px-6 max-w-screen-xl mx-auto">
      <header className="section-header">
        <h2 className="font-mono text-4xl mb-2 tracking-wide text-gray-750">Habilidades</h2>
        <p className="text-lg text-gray-720 mt-2">Descubre mis competencias técnicas y las herramientas que manejo.</p>
      </header>
      <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {skills.map((skill, index) => (
          <SkillCard skill={skill} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
