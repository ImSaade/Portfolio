// src/components/Education/Education.jsx
import React from "react";
import CertificationCard from "./CertificationCard";

import logoTecnm from "../../assets/img/logo-tecnm.png";
import logoCbtis from "../../assets/img/logo-cbtis.png";
import autoAprendizaje from "../../assets/img/auto-aprendizaje.png";
import logoCisco from "../../assets/img/logo-Cisco.png";
import cognitiveClass from "../../assets/img/logo-Cognitive.png";

const certifications = [
  {
    title: "Ingeniería en Sistemas Computacionales",
    logo: logoTecnm,
    alt: "TecNM Logo",
    caption: "TecNM campus Zacatepec",
    description: "Formación integral en desarrollo de software y gestión de TI, adaptándome a las nuevas tecnologías.",
  },
  {
    title: "Carrera técnica en programación",
    logo: logoCbtis,
    alt: "CBTis Logo",
    caption: "Cbtis 136 Juan Antonio Tlaxcoapan",
    description: "Carrera técnica centrada en programación y desarrollo de software con metodologías ágiles.",
  },
  {
    title: "Desarrollo Web y Software",
    logo: autoAprendizaje,
    alt: "Autoaprendizaje Logo",
    caption: "Autoaprendizaje",
    description: "Formación continua mediante plataformas online y proyectos prácticos para perfeccionar mis habilidades.",
  },
  {
    title: "Internet de las Cosas",
    logo: logoCisco,
    alt: "Cisco Logo",
    caption: "Cisco Networking Academy",
    description: "Aprendizaje sobre IoT, conectividad de dispositivos y redes inteligentes a través de la plataforma de Cisco.",
  },
  {
    title: "SQL y Bases de Datos Relacionales",
    logo: cognitiveClass,
    alt: "Logo Cognitive Class",
    caption: "Cognitive Class AI",
    description: "Aprendizaje sobre SQL y bases de datos relacionales, así como su administración y normalización.",
  },
];

const Education = () => {
  return (
    <section id="educacion" className="px-4 py-16 max-w-7xl mx-auto">
      <header className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">Educación</h2>
        <p className="text-lg text-gray-710 mt-2">Descubre mis logros académicos y la formación continua que respalda mi formación profesional.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default Education;
