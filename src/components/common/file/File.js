import React, { useState, useEffect } from "react";
import csv from "../../../assets/csv-format.png";
import doc from "../../../assets/doc-format.png";
import image from "../../../assets/image-format.png";
import pdf from "../../../assets/pdf-format.png";

import "./File.scss";

const File = ({ type, file, key, onChange }) => {
  const [fileImage, setFileImage] = useState("");

  useEffect(() => {
    formatFile();
  }, [fileImage]);

  const formatFile = () => {
    const fileType = type && type.toString();

    if (fileType.includes("csv")) {
      setFileImage(csv);
      return fileImage;
    }
    if (fileType.includes("doc")) {
      setFileImage(doc);
      return fileImage;
    }
    if (fileType.includes("image")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFileImage(reader.result);

        return fileImage;
      };
    }
    if (fileType.includes("pdf")) {
      setFileImage(pdf);
      return fileImage;
    }
  };

  return (
    <div className="file-component-container">
      <img src={fileImage} className="file-component-container__image" />
      <input
        className="file-component-container__text"
        type="text"
        onChange={e => onChange(e, file)}
      />
    </div>
  );
};

export default File;
