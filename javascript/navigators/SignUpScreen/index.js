import React from 'react';
import {reduxForm} from 'redux-form';
import SignInSignUpForm from '../../components/SignInSignUpForm';

const SignUpScreen = props => {
  return (
    <SignInSignUpForm
      formFor="SignUp"
      disabled={props.submitting || !props.valid}
      handleSubmit={props.handleSubmit}
    />
  );
};

export default reduxForm({
  form: 'signUpForm',
  onSubmit: async (values, dispatch) => {
    dispatch({type: 'SIGN_UP_REQUEST', values})
  },
})(SignUpScreen);
