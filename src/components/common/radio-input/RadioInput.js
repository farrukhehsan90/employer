import React, { Fragment } from "react";
import "./FileInput.scss";

const DateInput = ({ placeholder, type, id, onChange,name }) => {
  const randomId = `radio-input${Math.round(Math.random * 1000)}`;

  return (
    <Fragment>
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'85%'}}>

      <span style={{whiteSpace:'nowrap'}}>{placeholder}</span>
      
      <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',width:'45%'}}>
      <label htmlFor="Boy">Boy</label>
      <input
        name={name?name:randomId}
        id={"Boy"}
        style={{
            width: "82%",
            height: 45,
            borderRadius: 10,
            border: "1px solid black",
            fontSize: "1.2vw",
            padding: "0 3%"
        }}
        className="container"
        type="radio"
        placeholder={placeholder}
        />
         <label htmlFor="Girl">Girl</label>
      <input
        name={name?name:randomId}
        id={"Girl"}
        style={{
            width: "82%",
            height: 45,
            borderRadius: 10,
            border: "1px solid black",
            fontSize: "1.2vw",
            padding: "0 3%"
        }}
        className="container"
        type="radio"
        placeholder={placeholder}
        />
        </div>
        </div>
    </Fragment>
  );
};

export default DateInput;
