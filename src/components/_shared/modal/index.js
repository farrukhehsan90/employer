import React, { Fragment } from "react";
import "./index.scss";
import { Button } from "./button";

export const Modal = ({
  show,
  children,
  text,
  actionBtnText,
  cancelBtnText,
  onClickCancel,
  onClickUpload,
  useAsRows
}) => {
  // Render Functions

  const renderButtons = () => (
    <div className="modal-container__button-container">
      <Button
        onClick={onClickUpload}
        color="#3085A8"
        textColor="#fff"
        buttonText={actionBtnText}
      />
      <Button
        color="#fff"
        onClick={onClickCancel}
        textColor="#000"
        buttonText={cancelBtnText}
      />
    </div>
  );

  const renderModalContainer = () => (
    <Fragment>
      {show && (
        <div className="modal-container">
          <div className="modal-container__header">{text}</div>
          <div
            style={!useAsRows ? { height: "100%" } : {}}
            className="modal-container__files"
          >
            {children}
          </div>
          {renderButtons()}
        </div>
      )}
    </Fragment>
  );

  return renderModalContainer();
};
