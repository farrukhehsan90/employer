import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangeForm } from "../../__redux/actions/authActions";
import { Spinner } from "../_shared/Spinner";
import { Input } from "../_shared/Input";
import { AdditonalFields } from "../AdditonalFields";
import inputsJSON from "../../__assets/inputs.json";

import "./index.scss";
import { saveForm } from "../../__redux/actions/formActions";

export const FormFields = () => {
  const auth = useSelector(state => state.auth);

  const initialState = {
    error: {},
    inputs: [...inputsJSON],
    values: {}
  };

  const [state, setState] = useState(initialState);

  const { error, inputs, values } = state;

  const dispatch = useDispatch();

  const { loading, atStep2, userName, firstName, lastName } = auth;


  // Logic Functions

  const onChangeInputFields = (e, name) => {
    const { value } = e.target;

    setState({
      ...state,
      values: {
        ...values,
        [name]: value
      }
    });

    dispatch(
      onChangeForm({
        key: name,
        value
      })
    );
  };

  const onClickNext = e => {
    e.preventDefault();

    setState({ ...state, error: {} });

    const errors = {};

    switch ("") {
      case userName:
        errors.userName = "Please choose a username";
        setState({ ...state, error: errors });
        return;

      case firstName:
        errors.firstName = "Please enter first name";
        setState({ ...state, error: errors });
        return;

      case lastName:
        errors.lastName = "Please enter last name";
        setState({ ...state, error: errors });
        return;
      default:
    }

    return saveForm(dispatch);
  };

  //Render Functions

  const renderSpinner = () => <Spinner />;

  const renderFormFields = () => (
    <Fragment>
      <div className="form-page-container__card--title">
        <h1 className="form-page-container__sign-up">Sign Up</h1>
      </div>

      <form
        className="form-page-container__form"
        noValidate
        onSubmit={onClickNext}
      >
        {inputs.map(({ name, value, placeholder }) => (
          <Input
            key={name}
            errors={error}
            name={name}
            value={values[name]}
            onChange={e => onChangeInputFields(e, name)}
            placeholder={placeholder}
          />
        ))}

        <button
          onClick={onClickNext}
          className="form-page-container__card--next-button"
        >
          Next
        </button>
      </form>
    </Fragment>
  );

  const renderCardContainer = () => {
    return atStep2 ? <AdditonalFields /> : renderFormFields();
  };

  const renderCard = () => (
    <div className="form-page-container__card ">
      <div className="form-page-container__card--container">
        {loading ? renderSpinner() : renderCardContainer()}
      </div>
      <h5 className="form-page-container__card--existing-account">
        Already have an account?
        <span className="form-page-container__card--existing-account-subtext">
          {" "}
          Login
        </span>
      </h5>
    </div>
  );

  const renderLanding = () => (
    <div className="form-page-container__landing">
      <h1 className="form-page-container__landing--title">
        Welcome to Employer
      </h1>
      <img
        alt="main"
        src="https://media.giphy.com/media/vuOw3fiAdjVNYMBjoh/giphy.gif"
        className="form-page-container__landing--image"
      />
    </div>
  );

  return (
    <div className="form-page-container">
      {renderCard()}
      {renderLanding()}
    </div>
  );
};
