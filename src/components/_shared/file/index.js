import React, { useState, useEffect, useRef } from "react";
import csv from "../../../__assets/csv-format.png";
import doc from "../../../__assets/doc-format.png";
import pdf from "../../../__assets/pdf-format.png";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {useDispatch} from 'react-redux';
import "./index.scss";
import { Avatar } from "../avatar";
import { Button } from "../modal/button";
import CropperPopup from "../cropper-popup";
import { saveCurrentRef } from "../../../__redux/actions/formActions";
import { SAVE_CROPPER_REF } from "../../../__redux/actions/types";
import { store } from "../../../__redux/store";

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

  const dispatch=useDispatch();





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
      {/* <CropperPopup showCropModal={showCropModal} ref={ref} currentImage={currentImage} setCropModalState={setCropModalState} file={file} onCrop={onCrop} step2State={step2State}/> */}
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
      <div
        style={{
          ...{
            backgroundColor: "#f3f3f3",
            boxShadow: ".5rem .5rem 1rem grey",
            width: 400,
            height: 450,
            zIndex: 100,
            borderRadius: 20,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
          },
          ...(!showCropModal && { display: "none" })
        }}
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
            style={{width:400,height:400}}
            src={currentImage}
          />
        }
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingTop: "2%"
          }}
        >
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
      {type && type.includes("image") && (
        <Button
          style={{ opacity: 1 }}
          onClick={() =>{

            store.dispatch({type:SAVE_CROPPER_REF,payload:ref}); 
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
