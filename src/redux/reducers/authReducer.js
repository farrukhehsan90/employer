import { LOADING,BACK } from "../actions/types";
import { SIGNUP } from "../actions/types";


const initialState={

    email:'',
    password:'',
    isAuthenticated:false,
    loading:false,
    atStep2:false


};


const authReducer=(state=initialState,action)=>{

    const {type,payload}=action;

switch(type){

    case LOADING:
        console.log('action.payload',action.payload);
        return {
            ...state,
            loading:payload
        }
    case SIGNUP:
        return {
            ...state,
            user:payload.user,
            atStep2:payload.atStep2
        }
    case BACK:
        return {
            ...state,
            atStep2:false
        }
    default:
        return state;

}



}


export default authReducer;