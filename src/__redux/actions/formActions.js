import { SAVE_USER_DETAILS, LOADING, BACK } from "./types";

export const saveForm = (dispatch) => {
  //SAVE FORM
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(setLoading(false));
    dispatch({
      type: BACK,
      payload: true
    });
  }, 3500);

};

export const setLoading = (loading) => ({
  type: LOADING,
  payload:loading
});
