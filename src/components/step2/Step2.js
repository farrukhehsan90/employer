import React, { useState } from "react";
import { useDispatch } from "react-redux";
import backButton from "../../assets/back-button.svg";

import Input from "../common/input/Input";
import { BACK } from "../../redux/actions/types";
import FileInput from "../common/file-input/FileInput";
import DateInput from "../common/date-input/DateInput";
import RadioInput from "../common/radio-input/RadioInput";
import Avatar from "../avatar/Avatar";

import "./Step2.scss";

const Step2 = () => {
  const [avatar, setAvatar] = useState("");
  const [files, setFiles] = useState({});

  const dispatch = useDispatch();

  const onUploadResume = e => {
    const { files: uploadedFiles } = e.target;
    console.log("e", e.target.files);
    console.log("uploadedFiles", uploadedFiles);

    if (uploadedFiles.length > 0) {
      Array.isArray(uploadedFiles);
      console.log(typeof uploadedFiles);

      setFiles(uploadedFiles);
    }
  };

  const onChangeAvatar = e => {
    const { files } = e.target;

    console.log("e", files);
    console.log("e.length", files.length);

    if (files.length > 0) {
      const reader = new FileReader();

      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        console.log("image", reader.result);
        setAvatar(reader.result);
      };
    }
    console.log("e", files);
  };

  return (
    <div className="main-container">
      <div className="main-container__header" >
        <img
          onClick={() =>
            dispatch({
              type: BACK
            })
          }
          src={backButton}
          className="main-container__header--back-button"
        />
        <div className="main-container__header--title">
          <h2>Almost there!</h2>
        </div>
      </div>
      <div
       className="form-container"
      >
        <Avatar avatar={avatar} onChange={onChangeAvatar} />
        <div
          className="form-container__forms"
        >
          <DateInput placeholder="Enter your birth date" />
          <RadioInput placeholder="Select your gender" />
          <FileInput
            onChange={onUploadResume}
            type="file"
            placeholder="Upload Resume"
          />
          <button
            className="form-container__forms--submit-button"
          >
            Alright, Let me in!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
