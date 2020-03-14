import React, { useState, Fragment, createRef, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import backButton from "../../__assets/back-button.svg";

import { BACK, DONE } from "../../__redux/actions/types";
import { FileInput } from "../_shared/file-input";
import { DateInput } from "../_shared/date-input";
import { RadioInput } from "../_shared/radio-input";
import { Avatar } from "../_shared/avatar/index";

import "./index.scss";
import { CustomFile } from "../_shared/file";
import { Modal } from "../_shared/modal";
import { Done } from "../done";

export const Step2 = () => {
  const initialState = {
    avatar: "",
    show: false,
    showCropModal: false,
    files: {},
    croppedImage: "",
    updatedCroppedImage: "",
    isCroppedImage: "",
    currentRef: {},
    currentImage: "",
    currentFile: "",
    showAvatarPopup: false
  };
  const [state, setState] = useState(initialState);

  // const [currentReference,setCurrentReference]=useState(null);

  const avatarRef = useRef();

  const {
    avatar,
    show,
    files,
    croppedImage,
    updatedCroppedImage,
    isCroppedImage,
    showCropModal,
    currentImage,
    currentFile,
    currentRef,
    showAvatarPopup
  } = state;

  const auth = useSelector(state => state.auth);
  const form= useSelector(state => state.form);

  const { doneWithStep2 } = auth;

  const dispatch = useDispatch();

  const onChange = (e, file) => {};

  const onUploadResume = e => {
    const { files: uploadedFiles } = e.target;

    if (uploadedFiles.length > 0) {


      setTimeout(() => {
        setState({ ...state, show: true, files: uploadedFiles });
      }, 1500);
    }
  };

  const onCropAvatar = name => {
    const { currentRef: cropperRef } = state;
    const croppedImage = cropperRef.current.getCroppedCanvas().toDataURL();

    setState({ ...state, croppedImage });
  };

  const onSetCroppedImage = () => {
    setState({ ...state, updatedCroppedImage: croppedImage });
    setState({ ...state, isCroppedImage: true });
  };
  const onChangeAvatar = e => {
    const { files } = e.target;

    if (files.length > 0) {
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        setState({ ...state, avatar: reader.result });
      };
    }
  };

  const onClickSubmit = () => {
    return dispatch({
      type: DONE
    });
  };

  // const setCurrentRef=(ref,name)=>{

  //   setState(initialState);
  // };

  const renderModal = () => (
    <Modal
      onClickUpload={() => setState({ ...state, show: false })}
      onClickCancel={() => setState({ ...state, show: false })}
      show={show}
      text="Add any comments, eh?"
      actionBtnText="Upload"
      cancelBtnText="Cancel"
    >
      {files &&
        Object.keys(files).map((file, index) => {
          return (
            <CustomFile
              setCropModalState={setState}
              showCropModal={showCropModal}
              step2State={state}
              type={files[file].type}
              file={files[file]}
              index={file}
              files={files}
              onCrop={onCrop}
              setCurrentRef={setState}
              onChange={onChange}
              key={file}
              currentImage={currentImage}
            />
          );
        })}
    </Modal>
  );

  const onCrop = () => {
    const { files, currentFile } = state;


    const base64 = currentRef.current.getCroppedCanvas().toDataURL();



    fetch(base64)
      .then(res => res.arrayBuffer())
      .then(blob => {
        const file = new File([blob], currentFile, { type: "image/png" });

        const filteredFileIndex = Object.keys(files).findIndex(file => {
          return (
            files[file].name.trim().toString() === currentFile.toString().trim()
          );
        });

        const updatedFiles = Object.keys(files)
          .filter(file => {
            return (
              files[file].name.trim().toString() !==
              currentFile.toString().trim()
            );
          })
          .map(file => files[file]);

        const newFiles = {
          ...updatedFiles,
          file
        };








        setState({ ...state, files: newFiles, showCropModal: false });
      });
  };

  const renderFormBody = () => (
    <div className="form-container">
      <Avatar
        setIsCroppedImage={setState}
        state={state}
        setState={setState}
        setCurrentRef={setState}
        showAvatarPopup={showAvatarPopup}
        isCroppedImage={isCroppedImage}
        croppedImage={updatedCroppedImage}
        onSetCroppedImage={onSetCroppedImage}
        onCrop={onCropAvatar}
        avatar={avatar}
        ref={avatarRef}
        onChange={onChangeAvatar}
      />
      <div className="form-container__forms">
        <DateInput placeholder="Enter your birth date" />
        <RadioInput placeholder="Select your gender" />
        <FileInput
          onChange={onUploadResume}
          type="file"
          placeholder="Upload Resume"
        />
        <button
          onClick={onClickSubmit}
          className="form-container__forms--submit-button"
        >
          Alright, Let me in!
        </button>
      </div>
    </div>
  );

  const renderFormHeader = () => (
    <div className="main-container__header">
      <img
        alt="back-button"
        onClick={() =>
          dispatch({
            type: BACK,
            payload: false
          })
        }
        src={backButton}
        className="main-container__header--back-button"
      />
      <div className="main-container__header--title">
        <h2>Almost there!</h2>
      </div>
    </div>
  );

  const renderBody = () => (
    <Fragment>
      {renderModal()}
      {renderFormHeader()}
      {renderFormBody()}
    </Fragment>
  );

  const renderStep2 = () => (
    <div className="main-container">
      {doneWithStep2 ? <Done /> : renderBody()}
    </div>
  );

  return renderStep2();
};
