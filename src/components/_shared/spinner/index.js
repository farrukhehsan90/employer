import React from "react";
import spinner from "../../../__assets/spinner.gif";

import "./index.scss";

export const Spinner = () => {
  return (
    <div className="spinner-container">
      <img
        alt="Loading..."
        src={spinner}
        className="spinner-container__image"
      />
    </div>
  );
};


