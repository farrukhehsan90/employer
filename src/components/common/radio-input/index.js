import React, { Fragment } from "react";
import "./index.scss";
import Radio from "./radio";

const DateInput = ({ placeholder, type, id, onChange, name }) => {
  const randomId = `radio-input${Math.round(Math.random * 1000)}`;


  const renderRadioButtons=()=>
     <div className="radio-container__radio">
     <Radio name="Girl" randomId={Math.round(Math.random()*1000)} style="radio-container__single-radio" htmlFor="Girl" text="Girl" placeholder={placeholder}/>
     <Radio name="Boy" randomId={Math.round(Math.random()*1000)} style="radio-container__single-radio" htmlFor="Boy" text="Boy" placeholder={placeholder}/>
     </div>



  return (
      <div className="radio-container">
        <span className="radio-container--text">{placeholder}</span>       
          {renderRadioButtons()}
      </div>
  );
};

export default DateInput;
