import React from 'react';
import './Input.scss';

const Input = ({placeholder,type}) => {
    return (
        <input type={type?type:"text"} className="container" placeholder={placeholder} style={{width:'85%',height:40,borderRadius:10,padding:2,border:type?'':'1px solid black'}}/>
               
    );
}

export default Input;