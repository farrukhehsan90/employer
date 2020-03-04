import React, { Fragment } from 'react';
import './FileInput.scss';

const DateInput = ({placeholder,type,id,onChange}) => {

    let upload=null;


    return (
       <Fragment>
        <input style={{width:'82%',height:45,borderRadius:10,border:'1px solid black',fontSize:'1.2vw',padding:'0 3%'}} className="container" type="date"  placeholder={placeholder} />
       </Fragment>
               
    );
}

export default DateInput;