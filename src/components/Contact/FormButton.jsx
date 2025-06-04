// src/components/Contact/FormButton.jsx
import React from "react";

const FormButton = ({ loading }) => {
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center gap-3 py-4 px-10 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-400 transition-transform transform active:translate-y-1 disabled:bg-gray-300"
      disabled={loading}
    >
      {loading ? "Enviando..." : "Enviar Mensaje"}
    </button>
  );
};

export default FormButton;
