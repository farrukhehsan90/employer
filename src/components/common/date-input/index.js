import React, { Fragment } from "react";
import "./index.scss";

const DateInput = ({ placeholder}) => {

  return (
    <Fragment>
      <input className="date-container" type="date" placeholder={placeholder} />
    </Fragment>
  );
};

export default DateInput;
