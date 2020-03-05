import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import backButton from "../../__assets/back-button.svg";

import { BACK, DONE } from "../../__redux/actions/types";
import FileInput from "../common/file-input";
import DateInput from "../common/date-input";
import RadioInput from "../common/radio-input";
import Avatar from "../avatar";

import "./index.scss";
import File from "../common/file";
import Modal from "../common/modal";
import Done from "../done";

const Step2 = () => {
  const [avatar, setAvatar] = useState("");
  const [show, setShowModal] = useState(false);
  const [files, setFiles] = useState({});

  const { auth } = useSelector(state => state);

  const { doneWithStep2 } = auth;

  const [croppedImage, setCroppedImage] = useState("");
  const [updatedCroppedImage, setUpdatedCroppedImage] = useState("");
  const [isCroppedImage, setIsCroppedImage] = useState("");

  const dispatch = useDispatch();

  const onChange = (e, file) => {};

  const onUploadResume = e => {
    const { files: uploadedFiles } = e.target;

    if (uploadedFiles.length > 0) {
      Array.isArray(uploadedFiles);

      setFiles(uploadedFiles);
    }

    setTimeout(() => {
      setShowModal(true);
    }, 1500);
  };

  const onCropAvatar = cropperRef => {
    const croppedImage = cropperRef.current.getCroppedCanvas().toDataURL();

    setCroppedImage(croppedImage);
  };

  const onSetCroppedImage = () => {
    setUpdatedCroppedImage(croppedImage);
    setIsCroppedImage(true);
  };
  const onChangeAvatar = e => {
    const { files } = e.target;

    if (files.length > 0) {
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
    }
  };

  const onClickSubmit = () => {
    return dispatch({
      type: DONE
    });
  };

  return (
    <div className="main-container">
      {doneWithStep2 ? (
        <Done />
      ) : (
        <Fragment>
          <Modal
            onClickUpload={() => setShowModal(false)}
            onClickCancel={() => setShowModal(false)}
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
          <div className="form-container">
            <Avatar
              setIsCroppedImage={setIsCroppedImage}
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
        </Fragment>
      )}
    </div>
  );
};

export default Step2;
