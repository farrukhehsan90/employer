import React from "react";
import "./index.scss";

export const Experience = ({ text, value, onChange, style, time }) => {
  return (
    <div className="experience-container">
      <span className="experience-text">{text}</span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20%"
        }}
      >
        <input
          className="experience-input"
          style={style ? style : {}}
          type="number"
          value={value}
          onChange={onChange}
        />
        <span className="experience-text">{time ? time : "years"}</span>
      </div>
    </div>
  );
};
