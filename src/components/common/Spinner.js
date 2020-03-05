import React from "react";
import spinner from "../../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={spinner} className="spinner-container__image" />
    </div>
  );
};

export default Spinner;
