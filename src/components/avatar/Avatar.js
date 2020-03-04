import React, { Fragment } from 'react';
import placeholderImage from '../../assets/avatar-icon.svg';

const Avatar = ({onChange,avatar}) => {

    let uploadAvatar;

    return (
        <Fragment>
            <input multiple={false} accept="image/*" ref={(ref)=>uploadAvatar=ref} type="file" onChange={onChange} style={{display:'none'}}/>
        <div onClick={()=>uploadAvatar.click()} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <img src={avatar?avatar:placeholderImage} style={{width:100,height:100}}/>
        <span style={{fontSize:'1vw'}}>Click to edit</span>
    </div>
        </Fragment>
    );
}

export default Avatar;