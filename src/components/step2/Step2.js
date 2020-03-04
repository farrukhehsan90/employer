import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import backButton from '../../assets/back-button.svg';

import Input from '../common/input/Input';
import { BACK } from '../../redux/actions/types';
import FileInput from '../common/file-input/FileInput';
import DateInput from '../common/date-input/DateInput';
import RadioInput from '../common/radio-input/RadioInput';
import Avatar from '../avatar/Avatar';

const Step2 = () => {

    const [avatar,setAvatar]=useState('');

    const dispatch=useDispatch();

    const onChangeFiles=(e)=>{

        // console.log('e',e.target.files);

    }

    const onChangeAvatar=(e)=>{

        const {files}=e.target;

        console.log('e',files);
        console.log('e.length',files.length);

        if(files.length>0){

            const reader=new FileReader();
            
            reader.readAsDataURL(files[0]);
            reader.onloadend=()=>{
                
                console.log('image',reader.result)
                setAvatar(reader.result);
                
            }
            
    }
            console.log('e',files)
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
               <Avatar avatar={avatar} onChange={onChangeAvatar}/>
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