import React, { Fragment, useRef } from "react";
import placeholderImage from "../../assets/avatar-icon.svg";
import Cropper from "react-cropper";
import tickIcon from "../../assets/tick-icon.png";
import closeIcon from "../../assets/close-icon.png";
import "cropperjs/dist/cropper.css";

import "./Avatar.scss";

const Avatar = ({
  onChange,
  avatar,
  onCrop,
  croppedImage,
  isCroppedImage,
  setIsCroppedImage,
  onSetCroppedImage
}) => {
  const cropperRef = useRef(null);

  let uploadAvatar;

  return (
    <Fragment>
      <input
        multiple={false}
        accept="image/*"
        ref={ref => (uploadAvatar = ref)}
        type="file"
        onChange={onChange}
        className="avatar-input-file"
      />
      <div
        onClick={() => {
          setIsCroppedImage(false);
          uploadAvatar.click();
        }}
        className="avatar-container"
      >
        {!avatar ? (
          <img
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
            src={isCroppedImage ? croppedImage : placeholderImage}
            className="avatar-container__image"
          />
        )}
        <span className="avatar-container__text">Click to edit</span>
      </div>
      <div className="crop-container">
        {avatar && !isCroppedImage ? (
          <div className="crop-container__group">
            <img
              onClick={onSetCroppedImage}
              className="crop-container__tick"
              src={tickIcon}
            />
            <img className="crop-container__close" src={closeIcon} />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default Avatar;
