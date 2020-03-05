import React, { Fragment } from "react";
import "./DateInput.scss";

const DateInput = ({ placeholder, type, id, onChange }) => {
  let upload = null;

  return (
    <Fragment>
      <input className="date-container" type="date" placeholder={placeholder} />
    </Fragment>
  );
};

export default DateInput;
