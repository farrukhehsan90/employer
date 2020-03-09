import React, { Fragment } from 'react';

const Radio = ({htmlFor,text,placeholder,style}) => {
    return (
        <Fragment>
             <label htmlFor={htmlFor}>{text}</label>
          <input
            name={name ? name : randomId}
            id={{htmlFor}}
            className={style}
            type="radio"
            placeholder={placeholder}
          />
        </Fragment>
    );
}

export default Radio;