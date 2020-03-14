import React, { useState, useEffect, useRef } from "react";
import csv from "../../../__assets/csv-format.png";
import doc from "../../../__assets/doc-format.png";
import pdf from "../../../__assets/pdf-format.png";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import "./index.scss";
import { Avatar } from "../avatar";
import { Button } from "../modal/button";
import CropperPopup from "../cropper-popup";

export const CustomFile = ({
  index,
  type,
  file,
  onChange,
  onCrop,
  showCropModal,
  setCropModalState,
  step2State,
  setCurrentRef,
  currentImage,
  files
}) => {
  const [name, setName] = useState(file.name);
  const initialState = {
    fileImage: ""
  };

  const ref=useRef(file.name);





  const [state, setState] = useState(initialState);

  const { fileImage } = state;

  useEffect(() => {
    formatFile();

  }, [files]);

  const formatFile = () => {
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
  };

  const renderFileContainer = () => (
    <div
      
      className="file-component-container"
    >
      {
     
        <img
          alt="icon"
          src={fileImage}
          className="file-component-container__image"
        />
      }
      <CropperPopup showCropModal={showCropModal} ref={ref} currentImage={currentImage} setCropModalState={setCropModalState} file={file} onCrop={onCrop} step2State={step2State}/>
      <div
        style={{
          ...{
            zIndex: 50,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            opacity: 0.4,
            position: "absolute",
            top: "-24%",
            left: "-11%"
          },
          ...(!showCropModal && { display: "none" })
        }}
      >
        &nbsp;
      </div>
      {type && type.includes("image") && (
        <Button
          style={{ opacity: 1 }}
          onClick={() =>{

           return setCropModalState({ ...step2State, showCropModal: true,currentRef:ref,currentImage:fileImage,currentFile:file.name})
          }
          }
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

  return renderFileContainer();
};
