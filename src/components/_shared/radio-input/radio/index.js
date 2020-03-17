import React, { Fragment } from 'react';

export const Radio = ({htmlFor,checked,text,placeholder,style,name,randomId,value,onChange}) => {
    return (
        <Fragment>
             <label htmlFor={htmlFor}>{text}</label>
          <input
          onChange={onChange}
            checked={checked}
            name={name ? name : randomId}
            id={{htmlFor}}
            className={style}
            type="radio"
            value={value}
            placeholder={placeholder}
          />
        </Fragment>
    );
}
