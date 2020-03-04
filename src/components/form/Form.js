import React, { Fragment } from 'react';
import {connect,useDispatch,useSelector} from 'react-redux';
import {login,signup} from '../../redux/actions/authActions';
import Spinner from '../common/Spinner';
import Input from '../common/input/Input';
import Step2 from '../step2/Step2';

const Form = () => {

    const {auth,form}=useSelector(state=>state);
    
    const {loading,isAuthenticated,atStep2}=auth;

  

    const onSubmitLogin=(e)=>{
        console.log('auth',auth);
        e.preventDefault();
        // login();
        // console.log('signup()',signup());
        signup();
        console.log('login submitted');
    }

    return (
        <Fragment>
        <div style={{width:'100vw',display:'flex',justifyContent:'space-evenly',height:'100vh',backgroundColor:'#5D6970',alignItems:'center'}}>
            <div style={{height:'100%',width:'35vw',alignSelf:'center',alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div style={{borderRadius:10,width:'100%',height:'80%',alignSelf:'center',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
            {loading?<Spinner/>:
                atStep2?<Step2/>
                :
                <Fragment>
                <div style={{paddingBottom:20,height:'40%',display:'flex',alignItems:'center'}}>
                <h1>Sign Up</h1>
                </div>

                <form  style={{padding:40,height:'50%',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',width:'100%'}} noValidate onSubmit={onSubmitLogin}>
                <Input placeholder="Choose a username"/>
                <Input placeholder="Enter First Name"/>
                <Input placeholder="Enter Last Name"/>
                <button style={{width:'86%',height:50,borderRadius:10,backgroundColor:'#3085A8',color:'#fff',fontSize:'1.5vw',fontWeight:'600'}}>
                    Next
                </button>
                </form>
                </Fragment>
                }
        
               </div>
               <h5 style={{color:'#fff'}}>Already have an account?<span style={{color:'#000'}}> Login</span></h5>
            </div>

            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
               <h1 style={{color:'#fff'}}>Welcome to Employer</h1>
               <img src='https://media.giphy.com/media/vuOw3fiAdjVNYMBjoh/giphy.gif'  style={{width:'100%',height:'auto',objectFit:'cover'}}/>
            </div>
        </div>}
        </Fragment>
    );
}




export default Form;