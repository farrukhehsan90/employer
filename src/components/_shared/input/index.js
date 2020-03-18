import React from "react";
import "./index.scss";

export const Input = ({ placeholder, type, name, value, onChange, errors }) => {
  return (
    <div className="main-input-container">
      <input
        value={value}
        onChange={e => onChange(e, name)}
        type={type ? type : "text"}
        className="input-container"
        placeholder={placeholder}
      />

      {errors && <div className="error__text">{errors[name]}</div>}
    </div>
  );
};
