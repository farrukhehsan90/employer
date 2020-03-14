import React, { Fragment, useRef } from "react";
import placeholderImage from "../../../__assets/avatar-icon.svg";
import Cropper from "react-cropper";
import tickIcon from "../../../__assets/tick-icon.png";
import closeIcon from "../../../__assets/close-icon.png";
import "cropperjs/dist/cropper.css";

import "./index.scss";
import { Button } from "../modal/button";

export const Avatar = ({
  onChange,
  avatar,
  onCrop,
  croppedImage,
  isCroppedImage,
  setState,
  onSetCroppedImage,
  state,
  step2State,
  showModal,
  showAvatarPopup
}) => {
  let uploadAvatar;

  const ref = useRef(null);

  const onFileUploaded = () => {
    setState({ ...state, showAvatarPopup: true });
  };

  const onClickUpload = () => {
    setState({ ...state, isCroppedImage: false });
    uploadAvatar.click();
    return;
  };

  const renderCropContainer = () => (
    <div className="crop-container">
      {avatar && !isCroppedImage ? (
        <div className="crop-container__group">
          <img
            alt="confirm"
            onClick={onSetCroppedImage}
            className="crop-container__tick"
            src={tickIcon}
          />
          <img alt="cancel" className="crop-container__close" src={closeIcon} />
        </div>
      ) : null}
    </div>
  );

  const renderImageContainer = () => (
    <div onClick={onClickUpload} className="avatar-container">
      <img
        style={{ width: 45, height: 45, borderRadius: 90 }}
        src={croppedImage ? croppedImage : placeholderImage}
      />
      <span className="avatar-container__text">Click to edit</span>
    </div>
  );

  const renderInputContainer = () => (
    <input
      multiple={false}
      accept="image/*"
      ref={ref => (uploadAvatar = ref)}
      type="file"
      onChange={onChange}
      onInputCapture={onFileUploaded}
      className="avatar-input-file"
    />
  );
  const renderCropperPopup = () => {
    return (
      <div
        className="cropper-popup-container"
        style={!showAvatarPopup && { display: "none" }}
      >
        <Cropper style={{ width: 400, height: 400 }} src={avatar} ref={ref} />
        <div className="cropper-popup-container__buttons">
          <Button
            buttonText="Crop"
            textColor="#fff"
            color="#F19549"
            onClick={() => onCrop(ref)}
          />
          <Button
            buttonText="Cancel"
            textColor="#000"
            color="#fff"
            onClick={() => setState({ ...state, showAvatarPopup: false })}
          />
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {renderInputContainer()}
      {renderImageContainer()}
      {/* {renderCropContainer()} */}
      {renderCropperPopup()}
    </Fragment>
  );
};
