import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangeForm } from "../../__redux/actions/authActions";
import { Spinner } from "../common/spinner";
import { Input } from "../common/input";
import { Step2 } from "../step2";

import "./index.scss";
import { BACK } from "../../__redux/actions/types";

export const Form = () => {
  const { auth } = useSelector(state => state);

  const initialState = {
    error: {}
  };

  const [state, setState] = useState(initialState);

  const { error } = state;

  const dispatch = useDispatch();

  const { loading, atStep2, userName, firstName, lastName } = auth;

  const onClickNext = e => {
    e.preventDefault();

    setState({ ...state, error: {} });

    const errors = {};

    switch ("") {
      case firstName:
        errors.firstName = "Please enter a username";
        setState({ ...state, error: errors });
        return;

      case lastName:
        errors.lastName = "Please enter a username";
        setState({ ...state, error: errors });
        return;

      case userName:
        errors.userName = "Please enter a username";
        setState({ ...state, error: errors });
        return;
    }

    return dispatch({
      type: BACK,
      payload: true
    });
  };

  const onChange = (e, name) => {
    const { value } = e.target;

    dispatch(
      onChangeForm({
        key: name,
        value
      })
    );

    return;
  };

  const renderCard = () => (
    <div className="form-page-container__card ">
      <div className="form-page-container__card--container">
        {loading ? (
          <Spinner />
        ) : atStep2 ? (
          <Step2 />
        ) : (
          <Fragment>
            <div className="form-page-container__card--title">
              <h1 className="form-page-container__sign-up">Sign Up</h1>
            </div>

            <form
              className="form-page-container__form"
              noValidate
              onSubmit={onClickNext}
            >
              {[
                {
                  name: "userName",
                  value: userName,
                  placeholder: "Choose a username"
                },
                {
                  name: "firstName",
                  value: firstName,
                  placeholder: "Enter first name"
                },
                {
                  name: "userName",
                  value: userName,
                  placeholder: "Enter last name"
                }
              ].map(({ name, value, placeholder }) => (
                <Input
                  errors={error}
                  name={name}
                  value={value}
                  onChange={onChange}
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
        )}
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
