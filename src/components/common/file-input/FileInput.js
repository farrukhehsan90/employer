import React, { Fragment } from 'react';
import './FileInput.scss';

const FileInput = ({placeholder,type,id,onChange}) => {

    let upload=null;


    return (
       <Fragment>
        <input multiple onChange={onChange} ref={(ref)=>upload=ref} type="file" className="file-input" placeholder={placeholder} />
       <button className="file-container"  onClick={()=>upload.click()}>Upload your resume</button>
       </Fragment>
               
    );
}

export default FileInput;