import React from 'react';
import spinner from '../../assets/spinner.gif';

const Spinner = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={spinner} style={{width:200,height:200}}/>
        </div>
    );
}

export default Spinner; 