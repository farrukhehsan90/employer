import React, { Fragment } from 'react';
import './FileInput.scss';

const FileInput = ({placeholder,type,id,onChange}) => {

    let upload=null;


    return (
       <Fragment>
        <input onChange={onChange} ref={(ref)=>upload=ref} type="file" className="container" placeholder={placeholder} style={{width:'85%',height:40,borderRadius:10,padding:2,display:'none'}}/>
       <button className="container" style={{width:'50%',height:35,borderRadius:10,backgroundColor:'#F19449',color:'#fff'}} onClick={()=>upload.click()}>Upload your resume</button>
       </Fragment>
               
    );
}

export default FileInput;