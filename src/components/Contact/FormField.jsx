// src/components/Contact/FormField.jsx
import React from "react";

const FormField = ({ id, label, type, placeholder, value, onChange, required }) => {
  return (
    <div className="campo relative">
      <label htmlFor={id} className="font-medium text-gray-800 text-sm">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full p-4 border border-grey-600 rounded-lg font-normal text-sm focus:outline-none focus:ring-2 focus:ring-primary transition resize-none min-h-[120px]"
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full p-4 border border-grey-600 rounded-lg font-normal text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
      )}
    </div>
  );
};

export default FormField;
