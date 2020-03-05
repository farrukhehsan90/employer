import React from 'react';
import './Input.scss';

const Input = ({placeholder,type}) => {
    return (
        <input type={type?type:"text"} className="input-container" placeholder={placeholder} />
               
    );
}

export default Input;