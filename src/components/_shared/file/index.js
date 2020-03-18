import React, { useState, useEffect, useRef, useCallback } from "react";
import csv from "../../../__assets/csv-format.png";
import doc from "../../../__assets/doc-format.png";
import pdf from "../../../__assets/pdf-format.png";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./index.scss";
import { Button } from "../Modal/button";
import minusIcon from "../../../__assets/minus-icon.png";

export const CustomFile = ({
  type,
  file,
  onChange,
  onCrop,
  showCropModal,
  setCropModalState,
  step2State,
  currentImage,
  image,
  files,
  onDeleteFile,
  currentFile
}) => {
  // Initial state object of the component
  const initialState = {
    fileImage: "",
    showDeleteButton: false
  };

  // Ref used for cropping
  const ref = useRef(file.name);

  const [state, setState] = useState(initialState);

  const { fileImage, showDeleteButton } = state;

  // Logic functions

  const formatFile = useCallback(() => {
    const { fileImage } = state;

    const fileType = type && type.toString();

    if (fileType.includes("csv")) {
      setState({ ...state, fileImage: csv });
      return fileImage;
    }
    if (fileType.includes("doc")) {
      setState({ ...state, fileImage: doc });
      return fileImage;
    }
    if (fileType.includes("image")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setState({ ...state, fileImage: reader.result });

        return fileImage;
      };
    }
    if (fileType.includes("pdf")) {
      setState({ ...state, fileImage: pdf });
      return fileImage;
    }
  }, [file, state, type]);

  // useEffect for rendering after each upload/re-upload
  useEffect(() => {
    formatFile();
  }, [files,formatFile]);

  // Render Functions

  const renderFileContainer = () => (
    <div className="file-component-container">
      {
        <img
          alt="icon"
          src={image ? image : fileImage}
          className="file-component-container__image"
        />
      }

      {file.name.trim().toString() === currentFile && (
        <div
          className="modal-cropper-container__overlay"
          style={{ ...(!showCropModal && { display: "none" }), ...{} }}
        >
          &nbsp;
        </div>
      )}
      {file.name.trim().toString() === currentFile && (
        <div
          className="modal-cropper-container__main"
          style={{ ...(!showCropModal && { display: "none" }), ...{} }}
        >
          {
            <Cropper
              ref={ref}
              zoomable
              zoomOnWheel
              style={{ width: 400, height: 400 }}
              src={currentImage}
            />
          }
          <div className="modal-cropper-container__buttons">
            <Button
              buttonText="Crop"
              onClick={() => {
                onCrop(file.name);
              }}
            />
            <Button
              onClick={() =>
                setCropModalState({ ...step2State, showCropModal: false })
              }
              buttonText="Cancel"
            />
          </div>
        </div>
      )}
      {type && type.includes("image") && (
        <Button
          style={{ opacity: 1 }}
          onClick={() => {
            return setCropModalState({
              ...step2State,
              showCropModal: true,
              currentRef: ref,
              currentImage: fileImage,
              currentFile: file.name
            });
          }}
          color="#000"
          textColor="#fff"
          buttonText="Crop"
        />
      )}
      <input
        className="file-component-container__text"
        type="text"
        onChange={e => onChange(e, file)}
      />
    </div>
  );

  const renderDeleteButton = () => (
    <div
      onClick={() => onDeleteFile(file)}
      className="file-component__delete-button"
      style={{ ...{}, ...(!showDeleteButton && { display: "none" }) }}
    >
      <img alt="delete-button" src={minusIcon} style={{ width: "50%" }} />
    </div>
  );

  return (
    <div
      className="overall-file-container"
      onMouseEnter={() => setState({ ...state, showDeleteButton: true })}
      onMouseLeave={() => setState({ ...state, showDeleteButton: false })}
    >
      {renderFileContainer()}
      {renderDeleteButton()}
    </div>
  );
};
