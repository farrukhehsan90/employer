import { LOADING, SIGNUP, SAVE_USER_DETAILS } from "./types";
import { store } from "../store";

export const login = () => {};

export const signup = (email, userDetails) => {
  const { dispatch } = store;

  dispatch(setLoading(true));

  setTimeout(() => {
    dispatch(setLoading(false));
    dispatch({
      type: SIGNUP,
      payload: {
        atStep2: true,
        user: {
          email,
          ...userDetails
        }
      }
    });
    return;
  }, 3500);
};

export const onChangeForm = value => {
  return store.dispatch({
    type: SAVE_USER_DETAILS,
    payload: {
      ...value
    }
  });
};

export const setLoading = value => ({
  type: LOADING,
  payload: value
});
