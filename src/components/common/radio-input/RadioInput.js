import React, { Fragment } from "react";
import "./RadioInput.scss";

const DateInput = ({ placeholder, type, id, onChange,name }) => {
  const randomId = `radio-input${Math.round(Math.random * 1000)}`;

  return (
    <Fragment>
        <div className="radio-container">

      <span className="radio-container--text">{placeholder}</span>
      
      <div className="radio-container__radio">
      <label htmlFor="Boy">Boy</label>
      <input
        name={name?name:randomId}
        id={"Boy"}
       
        className="radio-container__single-radio"
        type="radio"
        placeholder={placeholder}
        />
         <label htmlFor="Girl">Girl</label>
      <input
        name={name?name:randomId}
        id={"Girl"}
       
        className="radio-container__single-radio"
        type="radio"
        placeholder={placeholder}
        />
        </div>
        </div>
    </Fragment>
  );
};

export default DateInput;
