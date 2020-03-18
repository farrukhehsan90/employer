import { LOADING, BACK, SAVE_CROPPER_REF } from "./types";


// Action called for saving a form
export const saveForm = dispatch => {

  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(setLoading(false));
    dispatch({
      type: BACK,
      payload: true
    });
  }, 3500);
};

// Action called to store the current ref
export const saveCurrentRef = ref => dispatch =>
  dispatch({ type: SAVE_CROPPER_REF, payload: ref });

export const setLoading = loading => ({
  type: LOADING,
  payload: loading
});
