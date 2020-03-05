import React, { Fragment } from 'react';
import {connect,useDispatch,useSelector} from 'react-redux';
import {login,signup} from '../../redux/actions/authActions';
import Spinner from '../common/Spinner';
import Input from '../common/input/Input';
import Step2 from '../step2/Step2';

import './Form.scss';

const Form = () => {

    const {auth,form}=useSelector(state=>state);
    
    const {loading,isAuthenticated,atStep2}=auth;

  

    const onSubmitLogin=(e)=>{
        console.log('auth',auth);
        e.preventDefault();
        signup();
        console.log('login submitted');
    }

    return (
        <Fragment>
        <div className="form-page-container">
            <div className="form-page-container__card ">
            <div className="form-page-container__card--container">
            {loading?<Spinner/>:
                !atStep2?<Step2/>
                :
                <Fragment>
                <div className="form-page-container__card--title">
                <h1>Sign Up</h1>
                </div>

                <form noValidate onSubmit={onSubmitLogin}>
                <Input placeholder="Choose a username"/>
                <Input placeholder="Enter First Name"/>
                <Input placeholder="Enter Last Name"/>
                <button className="form-page-container__card--next-button">
                    Next
                </button>
                </form>
                </Fragment>
                }
        
               </div>
               <h5 className="form-page-container__card--existing-account">Already have an account?<span className="form-page-container__card--existing-account-subtext"> Login</span></h5>
            </div>

            <div className="form-page-container__landing">
               <h1 className="form-page-container__landing--title">Welcome to Employer</h1>
               <img src='https://media.giphy.com/media/vuOw3fiAdjVNYMBjoh/giphy.gif'  className="form-page-container__landing--image"/>
            </div>
        </div>}
        </Fragment>
    );
}




export default Form;