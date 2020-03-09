import React from "react";
import "./index.scss";

const Done = () => {
  const renderBody = () => (
    <div className="done-container">
      <div className="done__main-text">You've done it!</div>
      <div className="done__sub-text">We'll get back to you!</div>
      <img
        alt="sign-up successful"
        src="https://media.giphy.com/media/5BZslN01evFcI/giphy.gif"
        className="done-image"
      />
</div>
  );

  return (renderBody());
};

export default Done;
