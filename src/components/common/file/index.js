import React, { useState, useEffect } from "react";
import csv from "../../../__assets/csv-format.png";
import doc from "../../../__assets/doc-format.png";
import pdf from "../../../__assets/pdf-format.png";

import "./index.scss";

export const File = ({ type, file, onChange }) => {


  const initialState={
    fileImage:""
  }

  const {fileImage}=state;

  const [state,setState]=useState(initialState);


  useEffect(() => {
    formatFile();
  }, [state.fileImage]);

  const formatFile = () => {

    const {fileImage}=state;

    const fileType = type && type.toString();

    if (fileType.includes("csv")) {
      setState({...state,fileImage:csv});
      return fileImage;
    }
    if (fileType.includes("doc")) {
      setState({...state,fileImage:doc});
      return fileImage;
    }
    if (fileType.includes("image")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setState({...state,fileImage:reader.result});

        return fileImage;
      };
    }
    if (fileType.includes("pdf")) {
      setState({...state,fileImage:pdf});
      return fileImage;
    }
  };

  const renderFileContainer=()=> <div className="file-component-container">
  <img
    alt="icon"
    src={fileImage}
    className="file-component-container__image"
  />
  <input
    className="file-component-container__text"
    type="text"
    onChange={e => onChange(e, file)}
  />
</div>

  return renderFileContainer();
};

