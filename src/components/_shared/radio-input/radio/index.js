import React, { Fragment } from 'react';

export const Radio = ({htmlFor,text,placeholder,style,name,randomId}) => {
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
