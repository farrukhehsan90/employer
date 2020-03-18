import React from "react";
import "./index.scss";
import { Radio } from "./radio";

export const RadioInput = ({
  placeholder,
  type,
  id,
  onChange,
  name,
  value
}) => {
  const randomId = `radio-input${Math.round(Math.random * 1000)}`;

  const renderRadioButtons = () => (
    <div className="radio-container__radio">
      <Radio
        name="Girl"
        checked={value === "Girl"}
        value="Girl"
        onChange={e => onChange(e, "Girl")}
        randomId={randomId}
        className="radio-container__single-radio"
        htmlFor="Girl"
        text="Girl"
        placeholder={placeholder}
      />
      <Radio
        name="Boy"
        checked={value === "Boy"}
        value="Boy"
        onChange={e => onChange(e, "Boy")}
        randomId={randomId}
        className="radio-container__single-radio"
        htmlFor="Boy"
        text="Boy"
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="radio-container">
      <span className="radio-container--text">{placeholder}</span>
      {renderRadioButtons()}
    </div>
  );
};
