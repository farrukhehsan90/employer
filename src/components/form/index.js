import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangeForm } from "../../__redux/actions/authActions";
import Spinner from "../common/spinner";
import Input from "../common/input";
import Step2 from "../step2";

import "./index.scss";
import { BACK } from "../../__redux/actions/types";

const Form = () => {
  const { auth } = useSelector(state => state);

  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const { loading, atStep2, userName, firstName, lastName } = auth;

  const onClickNext = e => {
    e.preventDefault();

    setError({});

    const errors = {};

    if (!userName) {
      errors.userName = "Please enter a username";
      setError(errors);
      return;
    }
    if (!firstName) {
      errors.firstName = "Please enter your first name";
      setError(errors);
      return;
    }

    if (!lastName) {
      errors.lastName = "Please enter your last name";
      setError(errors);
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

  return (
    <Fragment>
      <div className="form-page-container">
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
                  <Input
                    errors={error}
                    name="userName"
                    value={userName}
                    onChange={onChange}
                    placeholder="Choose a username"
                  />
                  <Input
                    errors={error}
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    placeholder="Enter First Name"
                  />
                  <Input
                    errors={error}
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    placeholder="Enter Last Name"
                  />
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
      </div>
    </Fragment>
  );
};

export default Form;
