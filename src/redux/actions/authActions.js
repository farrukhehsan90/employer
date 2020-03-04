import {LOGIN,LOADING, SIGNUP} from './types';
import store from '../store/store';

export const login=()=>{

    //LOGIN
    console.log('login')


};

export const signup=(email,userDetails)=>{
    const {dispatch}=store;
    console.log('signup');

//    dispatch(setLoading(true));
    // return dispatch({÷
    dispatch(setLoading(true));

    
    setTimeout(() => {
        dispatch(setLoading(false));
        dispatch({
            type:SIGNUP,
            payload:{
                atStep2:true,
                user:{
                    email,
                    ...userDetails
                }
            }
        });
        return ;
    }, 3500);

}


export const setLoading=(value)=>({
    type:LOADING,
    payload:value
})