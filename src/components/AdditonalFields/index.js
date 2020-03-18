import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import backButton from "../../__assets/back-button.svg";

import { BACK, DONE } from "../../__redux/actions/types";
import { FileInput } from "../_shared/FileInput";
import { DateInput } from "../_shared/DateInput";
import { RadioInput } from "../_shared/RadioInput";
import { Avatar } from "../_shared/Avatar/index";

import "./index.scss";
import { CustomFile } from "../_shared/File";
import { Modal } from "../_shared/Modal";
import { Done } from "../Done";
import { Experience } from "../_shared/Experience";
import { Education } from "../_shared/Education";
import questionsJSON from "../../__assets/questions.json";

export const AdditonalFields = () => {
  const initialState = {
    avatar: "",
    show: false,
    showCropModal: false,
    files: [],
    croppedImage: "",
    updatedCroppedImage: "",
    isCroppedImage: "",
    currentRef: {},
    currentImage: "",
    currentFile: "",
    showAvatarPopup: false,
    radioValue: "Girl",
    experienceValue: "0",
    showEducationModal: false,
    questions: {}
  };
  const [state, setState] = useState(initialState);

  const {
    avatar,
    show,
    files,
    croppedImage,
    isCroppedImage,
    showCropModal,
    currentImage,
    currentFile,
    currentRef,
    showAvatarPopup,
    radioValue,
    experienceValue,
    showEducationModal,
    questions
  } = state;


  const auth = useSelector(state => state.auth);

  const { doneWithStep2 } = auth;

  const dispatch = useDispatch();

  
  
  
  //Logic Functions

  const onChange = (e, file) => {};

  const onRadioChange = e => {
    setState({ ...state, radioValue: e.target.value });
  };

  const onChangeExperienceValue = e =>
    setState({ ...state, experienceValue: e.target.value });

  const onUploadResume = e => {
    const { files: uploadedFiles } = e.target;

    if (uploadedFiles.length > 0) {
      const newUpdatedFiles = Object.keys(uploadedFiles).map(file => ({
        image: "",
        file: uploadedFiles[file]
      }));

      setTimeout(() => {
        setState(prevState => ({
          ...prevState,
          show: true,
          files: prevState.files.concat(...newUpdatedFiles)
        }));
      }, 1500);
    }
  };

  const onDeleteFile = file => {
    const updatedFiles = files.filter(singleFile => {
      return singleFile.file.name !== file.name;
    });

    setState({ ...state, files: updatedFiles, show: updatedFiles.length > 0 });
  };

  const onCropAvatar = ref => {
    const croppedImage = ref.current.getCroppedCanvas().toDataURL();

    setState({ ...state, croppedImage, showAvatarPopup: false });
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

  const onChangeEducation = (e, question, id) => {
    e.persist();
    const { value } = e.target;

    return setState(prevState => ({
      ...state,
      questions: {
        ...prevState.questions,
        [question]: value
      }
    }));
  };

  const onCrop = () => {
    const { files, currentFile } = state;

    const base64 = currentRef.current.getCroppedCanvas().toDataURL();

    const filteredFileIndex = files.findIndex(file => {
      return file.file.name.trim().toString() === currentFile.toString().trim();
    });

    const arrayClone = [...files];
    const updatedItem = files[filteredFileIndex];

    updatedItem.image = base64;

    arrayClone.splice(parseInt(filteredFileIndex), 1, updatedItem);

    setState({ ...state, files: arrayClone, showCropModal: false });
  };

  //Render Functions

  const renderModal = () => (
    <Modal
      useAsRows
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
              currentFile={currentFile}
              setCropModalState={setState}
              showCropModal={showCropModal}
              step2State={state}
              type={files[file].file.type}
              file={files[file].file}
              index={file}
              files={files}
              onCrop={onCrop}
              setCurrentRef={setState}
              onChange={onChange}
              key={file}
              image={files[file].image}
              currentImage={currentImage}
              onDeleteFile={onDeleteFile}
            />
          );
        })}
    </Modal>
  );

  const renderEducation = () => (
    <Fragment>
      <span
        style={{ width: "100%", textAlign: "center" }}
        onClick={() => setState({ ...state, showEducationModal: true })}
      >
        Add your education here
      </span>
      <Modal
        useAsRows={false}
        actionBtnText="Add"
        cancelBtnText="Cancel"
        text="Add your Education"
        onClickUpload={() => setState({ ...state, showEducationModal: false })}
        onClickCancel={() => setState({ ...state, showEducationModal: false })}
        show={showEducationModal}
      >
        <Education
          values={questions}
          questions={questionsJSON}
          onChange={onChangeEducation}
        />
      </Modal>
    </Fragment>
  );

  const renderFormBody = () => (
    <div className="form-container">
      <Avatar
        setIsCroppedImage={setState}
        state={state}
        setState={setState}
        setCurrentRef={setState}
        showAvatarPopup={showAvatarPopup}
        isCroppedImage={isCroppedImage}
        croppedImage={croppedImage}
        onSetCroppedImage={onSetCroppedImage}
        onCrop={onCropAvatar}
        avatar={avatar}
        onChange={onChangeAvatar}
      />
      <div className="form-container__forms">
        <DateInput placeholder="Enter your birth date" />
        <RadioInput
          onChange={onRadioChange}
          value={radioValue}
          placeholder="Select your gender"
        />
        <FileInput
          onChange={onUploadResume}
          type="file"
          placeholder="Upload Resume"
        />
        {files.length > 0 && (
          <span onClick={() => setState({ ...state, show: true })}>
            Preview files
          </span>
        )}
        <Experience
          text="Experience"
          value={experienceValue}
          onChange={onChangeExperienceValue}
        />
        {renderEducation()}
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
