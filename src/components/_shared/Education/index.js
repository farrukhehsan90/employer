import React from "react";
import "./index.scss";

export const Education = ({ questions, onChange, values }) => {
  return (
    <div className="education-container">
      {questions.map((question, index) => {
        return (
          <input
            placeholder={`${question.description}*`}
            className="education-input"
            value={values[question.description]}
            onChange={e => onChange(e, question.description)}
            key={question.id}
          />
        );
      })}
    </div>
  );
};
