import { SAVE_USER_DETAILS, SAVE_CROPPER_REF } from "../actions/types";

// initial state object for the reducer "auth"
const initialState = {
  email: "",
  password: "",
  isAuthenticated: false,
  currentRef: null
};

export const formReducer = (state = initialState, action) => {
  switch (action.types) {
    case SAVE_USER_DETAILS:
      return state;
    case SAVE_CROPPER_REF:
      return {
        ...state,
        currentRef: action.payload
      };
    default:
      return state;
  }
};
