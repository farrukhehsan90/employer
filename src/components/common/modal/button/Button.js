import React from "react";
import "./Button.scss";

const Button = ({ style, color, textColor, buttonText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="modal-button"
      style={{ backgroundColor: color, color: textColor }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
