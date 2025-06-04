// src/components/Contact/Contact.jsx
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import useInView from "../../Hooks/useInView"; // Importamos el hook
import ContactForm from "./ContactForm";

const Contact = () => {
  const { isVisible, sectionRef } = useInView(); // Usamos el hook aquí para la visibilidad

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect para inicializar EmailJS solo una vez
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Resetear el mensaje de error

    const serviceID = "service_ocd7t2a";
    const templateID = "template_1w3xqxi";

    emailjs.sendForm(serviceID, templateID, e.target).then(
      (result) => {
        console.log(result.text);
        setMessageSent(true);
        setLoading(false);
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
        setErrorMessage("Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo más tarde.");
      }
    );
  };

  return (
    <section
      ref={sectionRef} // Ref para observar la visibilidad de la sección
      id="contacto"
      className={`py-16 px-8 max-w-4xl mx-auto transition-all transform duration-500 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <h2 className="font-mono text-gray-750 text-4xl mb-2 tracking-wide text-center">
        Contacto
        <span className="absolute bottom-[-8px] left-0 w-[60%] h-1 bg-primary rounded-lg"></span>
      </h2>
      <p className="text-lg text-gray-710 mb-8 max-w-2xl mx-auto leading-relaxed text-center">Ponte en contacto para consultas o colaboraciones.</p>

      <ContactForm formData={formData} loading={loading} handleChange={handleChange} handleSubmit={handleSubmit} messageSent={messageSent} errorMessage={errorMessage} />
    </section>
  );
};

export default Contact;
