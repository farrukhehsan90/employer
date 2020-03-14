import React, { Fragment, useRef } from "react";
import placeholderImage from "../../../__assets/avatar-icon.svg";
import Cropper from "react-cropper";
import tickIcon from "../../../__assets/tick-icon.png";
import closeIcon from "../../../__assets/close-icon.png";
import "cropperjs/dist/cropper.css";

import "./index.scss";
import CropperPopup from "../cropper-popup";

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
  showAvatarPopup
}) => {

  let uploadAvatar;

  const ref=useRef(null);

  const onFileUploaded=()=>{
      setState({...state,showAvatarPopup:true})
  }

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
      <img style={{width:20,height:20}} src={avatar?avatar:placeholderImage}/>
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
  const renderCropperPopup=()=><CropperPopup state={state} setState={setState} showCropModal={showAvatarPopup} ref={{"yuv":"bubg"}} currentImage={avatar} setCropModalState={setState} onCrop={onCrop} step2State={step2State} />

  return (
    <Fragment>
      {renderInputContainer()}
      {renderImageContainer()}
      {renderCropContainer()}
      {renderCropperPopup()}
    </Fragment>
  );
};


