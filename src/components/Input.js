import React from "react";
import "./input.css";
function Input({ label, placeholder, type, name, onChange, value }) {
  return (
    <div className="input-container">
      <label for=""> {label} </label>
      <input
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
