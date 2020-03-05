import React, { Fragment } from 'react';
import './FileInput.scss';

const DateInput = ({placeholder,type,id,onChange}) => {

    let upload=null;


    return (
       <Fragment>
        <input  className="date-container" type="date"  placeholder={placeholder} />
       </Fragment>
               
    );
}

export default DateInput;