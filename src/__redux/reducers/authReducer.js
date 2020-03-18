import { LOADING, BACK, SAVE_USER_DETAILS, DONE } from "../actions/types";
import { SIGNUP } from "../actions/types";


// initial state object for the reducer "auth"
const initialState = {
  email: "",
  password: "",
  userName: "",
  firstName: "",
  lastName: "",
  isAuthenticated: false,
  loading: false,
  atStep2: false,
  doneWithStep2: false
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: payload
      };
    case SAVE_USER_DETAILS:
      const { key, value } = payload;

      return {
        ...state,
        [key]: value
      };
    case SIGNUP:
      return {
        ...state,
        user: payload.user,
        atStep2: payload.atStep2
      };
    case BACK:
      return {
        ...state,
        atStep2: action.payload
      };
    case DONE:
      return {
        ...state,
        doneWithStep2: true
      };
    default:
      return state;
  }
};
