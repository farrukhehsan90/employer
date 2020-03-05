import React, { Fragment } from 'react';
import placeholderImage from '../../assets/avatar-icon.svg';

const Avatar = ({onChange,avatar}) => {

    let uploadAvatar;

    return (
        <Fragment>
            <input multiple={false} accept="image/*" ref={(ref)=>uploadAvatar=ref} type="file" onChange={onChange} className="avatar-input-file"/>
        <div onClick={()=>uploadAvatar.click()} className="avatar-container">
        <img src={avatar?avatar:placeholderImage} className="avatar-container__image"/>
        <span className="avatar-container__text">Click to edit</span>
    </div>
        </Fragment>
    );
}

export default Avatar;