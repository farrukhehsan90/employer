import {SAVE_USER_DETAILS} from '../actions/types';

const initialState={

    email:'',
    password:'',
    isAuthenticated:false


};


const formReducer=(state=initialState,action)=>{

switch(action.types){

    case SAVE_USER_DETAILS:
        return state;

    default:
        return state;

}



}


export default formReducer;