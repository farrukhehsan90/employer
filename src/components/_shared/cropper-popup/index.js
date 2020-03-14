import React, { Fragment } from "react";
import { Button } from "../modal/button";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./index.scss";
const CropperPopup = ({
  showCropModal,
  ref,
  step2State,
  setCropModalState,
  currentImage,
  file,
  onCrop,
  setState,
  setCurrentRef,
  state
}) => {
  return (
    <Fragment>
      <div
      className="modal-cropper-container__overlay"

        style={!showCropModal?{ display: "none" }:{}}
      >
        &nbsp;
      </div>
      <div className="modal-cropper-container__main"
        style={!showCropModal?{ display: "none" }:{}}
      >
        {
          <Cropper
            ref={ref}
            // minContainerHeight={400}
            // minCanvasHeight={400}
            // minCanvasWidth={400}
            // minContainerWidth={400}
            // zoomable
            // zoomOnWheel
            style={{ width: 400, height: 400 }}
            src={currentImage}
          />
        }
        <div
         className="modal-cropper-container__buttons"
        >
          <Button
            buttonText="Crop"
            onClick={() => {
              
              onCrop(file && file.name);
            }}
          />
          <Button
            onClick={() =>
              setCropModalState({
                ...step2State,
                showCropModal: false,
                showAvatarPopup: false
              })
            }
            buttonText="Cancel"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CropperPopup;
