import React from "react";
import "./Modal.scss";
import Button from "./button/Button";

const Modal = ({
  show,
  children,
  text,
  actionBtnText,
  cancelBtnText,
  onClickCancel,
  onClickUpload
}) => {
  return (
    show && (
      <div className="modal-container">
        <div className="modal-container__header">{text}</div>
        <div className="modal-container__files">{children}</div>
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
      </div>
    )
  );
};

export default Modal;
