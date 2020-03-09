import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import backButton from "../../__assets/back-button.svg";

import { BACK, DONE } from "../../__redux/actions/types";
import {FileInput} from "../common/file-input";
import {DateInput} from "../common/date-input";
import {RadioInput} from "../common/radio-input";
import {Avatar} from "../avatar";

import "./index.scss";
import {File} from "../common/file";
import {Modal} from "../common/modal";
import {Done} from "../done";

export const Step2 = () => {
  const initialState = {
    avatar: "",
    show: false,
    files: {},
    croppedImage: "",
    updatedCroppedImage: "",
    isCroppedImage: ""
  };

  const [state, setState] = useState(initialState);

  const {
    avatar,
    show,
    files,
    croppedImage,
    updatedCroppedImage,
    isCroppedImage
  } = state;

  const auth  = useSelector(state => state.auth);

  const { doneWithStep2 } = auth;

  const dispatch = useDispatch();

  const onChange = (e, file) => {};

  const onUploadResume = e => {
    const { files: uploadedFiles } = e.target;

    if (uploadedFiles.length > 0) {
      Array.isArray(uploadedFiles);

      setState({ ...state, files: uploadedFiles });
    }

    setTimeout(() => {
      setState({ ...state, show: true });
    }, 1500);
  };

  const onCropAvatar = cropperRef => {
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
        Object.keys(files).map(file => (
          <File
            type={files[file].type}
            file={files[file]}
            onChange={onChange}
            key={file}
          />
        ))}
    </Modal>
  );

  const renderFormBody = () => (
    <div className="form-container">
      <Avatar
        setIsCroppedImage={setState}
        state={state}
        isCroppedImage={isCroppedImage}
        croppedImage={updatedCroppedImage}
        onSetCroppedImage={onSetCroppedImage}
        onCrop={onCropAvatar}
        avatar={avatar}
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


