import { LOADING, BACK, SAVE_CROPPER_REF } from "./types";

export const saveForm = dispatch => {
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

export const saveCurrentRef = ref => dispatch =>
  dispatch({ type: SAVE_CROPPER_REF, payload: ref });

export const setLoading = loading => ({
  type: LOADING,
  payload: loading
});
