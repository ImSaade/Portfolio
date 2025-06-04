// src/components/Contact/ContactForm.jsx
import React from "react";
import FormField from "./FormField";
import FormButton from "./FormButton";

const ContactForm = ({ formData, loading, handleChange, handleSubmit, messageSent, errorMessage }) => {
  return (
    <form id="contact-form" onSubmit={handleSubmit} className="grid gap-6 bg-white/90 p-8 rounded-lg shadow-lg border border-gray-200" style={{ backgroundColor: "#DDE6ED" }}>
      <FormField id="from_name" label="Nombre" type="text" placeholder="Tu nombre" value={formData.from_name} onChange={handleChange} required />
      <FormField id="from_email" label="Correo Electrónico" type="email" placeholder="tucorreo@example.com" value={formData.from_email} onChange={handleChange} required />
      <FormField id="message" label="Mensaje" type="textarea" placeholder="Escribe tu mensaje aquí..." value={formData.message} onChange={handleChange} required />

      <FormButton loading={loading} />

      {messageSent && !loading && <div className="mt-4 p-4 rounded-lg bg-green-100 text-green-800 border border-green-300">¡Mensaje enviado correctamente!</div>}

      {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
