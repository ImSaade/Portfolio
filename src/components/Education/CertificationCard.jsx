// src/components/Education/CertificationCard.jsx
import React from "react";

const CertificationCard = ({ cert }) => {
  return (
    <article className="bg-[#DDE6ED] p-8 rounded-lg shadow-md border border-black/5 relative overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg group">
      <header>
        <h3 className="text-xl font-semibold text-center text-gray-800 transition-colors duration-300 group-hover:text-grey-600">{cert.title}</h3>
      </header>
      <figure className="text-center mb-4 mt-4">
        <img src={cert.logo} alt={cert.alt} className="w-48 mx-auto transition-transform duration-300 ease-in-out group-hover:scale-110 drop-shadow" loading="lazy" />
        <figcaption className="mt-2 text-sm text-[#2f2c52] font-medium uppercase">{cert.caption}</figcaption>
      </figure>
      <p className="text-center text-gray-600 text-base mt-4 leading-relaxed">{cert.description}</p>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
    </article>
  );
};

export default CertificationCard;
