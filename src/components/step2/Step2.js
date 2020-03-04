import React from 'react';
import {useDispatch} from 'react-redux';
import backButton from '../../assets/back-button.svg';
import avatar from '../../assets/avatar-icon.svg';
import Input from '../common/input/Input';
import { BACK } from '../../redux/actions/types';
import FileInput from '../common/file-input/FileInput';
import DateInput from '../common/date-input/DateInput';
import RadioInput from '../common/radio-input/RadioInput';

const Step2 = () => {

    const dispatch=useDispatch();

    const onChangeFiles=(e)=>{

        console.log('e',e.target.files);

    }

    return (
        <div style={{width:'100%',display:'flex',flexDirection:'column',flex:1,padding:5}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flex:1,padding:10}}>
            <img onClick={()=>dispatch({
                type:BACK
            })} src={backButton} style={{width:20,height:20}}/>
            <div style={{width:'85%',margin:'auto',textAlign:'center'}}>
            <h2>Almost there!</h2>
            </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',flex:3}}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <img src={avatar} style={{width:100,height:100}}/>
                    <span style={{fontSize:'1vw'}}>Click to edit</span>
                </div>
                <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly',flex:1}}>
                <DateInput placeholder="Enter your birth date"/>
                <RadioInput placeholder="Select your gender"/>
                <FileInput onChange={onChangeFiles} type="file" placeholder="Upload resume"/>
                <button style={{width:'85%',height:50,borderRadius:10,backgroundColor:'#3085A8',color:'#fff',fontWeight:'600',fontSize:'1.2vw'}}>
                    Alright, Let me in!
                </button>
                </div>
            </div>
            
        </div>
    );
}

export default Step2;