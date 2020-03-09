import React, { Fragment, useRef } from "react";
import placeholderImage from "../../__assets/avatar-icon.svg";
import Cropper from "react-cropper";
import tickIcon from "../../__assets/tick-icon.png";
import closeIcon from "../../__assets/close-icon.png";
import "cropperjs/dist/cropper.css";

import "./index.scss";

export const Avatar = ({
  onChange,
  avatar,
  onCrop,
  croppedImage,
  isCroppedImage,
  setState,
  onSetCroppedImage,
  state
}) => {
  const cropperRef = useRef(null);

  let uploadAvatar;

  const onClickUpload=()=>{
    
      setState({...state,isCroppedImage:false});
      uploadAvatar.click();
      return;
  }

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
    <div
      onClick={onClickUpload}
      className="avatar-container"
    >
      {!avatar ? (
        <img
          alt="avatar"
          src={isCroppedImage ? croppedImage : placeholderImage}
          className="avatar-container__image"
        />
      ) : !isCroppedImage ? (
        <Cropper
          ref={cropperRef}
          src={avatar}
          className="avatar-container__crop"
          guides
          crop={() => onCrop(cropperRef)}
        />
      ) : null}
      {isCroppedImage && (
        <img
          alt="cropped-avatar"
          src={isCroppedImage ? croppedImage : placeholderImage}
          className="avatar-container__image"
        />
      )}
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
      className="avatar-input-file"
    />
  );

  return (
    <Fragment>
      {renderInputContainer()}
      {renderImageContainer()}
      {renderCropContainer()}
    </Fragment>
  );
};


