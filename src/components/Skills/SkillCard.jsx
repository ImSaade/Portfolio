import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <article className="skill-card bg-[#DDE6ED] p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg text-center relative overflow-hidden border border-gray-200 group">
      <figure className="skill-icon mb-4">
        <img src={skill.imgSrc} alt={`Ícono de ${skill.name}`} className="w-16 h-16 object-contain mx-auto filter drop-shadow-lg transition-transform duration-300 hover:scale-110" />
      </figure>
      <div className="skill-info">
        <h3 className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-500">{skill.name}</h3>
        <p className="text-gray-600 mt-2">{skill.description}</p>
      </div>
      {/* Barra animada */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
    </article>
  );
};

export default SkillCard;
