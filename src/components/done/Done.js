import React from "react";
import done from "../../assets/done.gif";
import "./Done.scss";

const Done = () => {
  return (
    <div className="done-container">
      <div className="done__main-text">You've done it!</div>
      <div className="done__sub-text">We'll get back to you!</div>
      <img
        src="https://media.giphy.com/media/5BZslN01evFcI/giphy.gif"
        className="done-image"
      />
    </div>
  );
};

export default Done;
