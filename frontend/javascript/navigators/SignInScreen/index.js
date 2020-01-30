import React from 'react';
import { reduxForm } from 'redux-form';
import SignInSignUpForm from '../../components/SignInSignUpForm';
import { useSwitchNavigation } from '../../hooks/authHooks';

const SignInScreen = props => {
  useSwitchNavigation({ navigation: props.navigation });
  const onClickForgotPassword = values => {
    console.log('onClickForgotPassword', values);
  };

  return (
    <SignInSignUpForm
      formFor="SignIn"
      disabled={props.submitting || !props.valid}
      handleSubmit={props.handleSubmit}
      onClickForgotPassword={onClickForgotPassword}
    />
  );
};

export default reduxForm({
  form: 'signInForm',
  onSubmit: (values, dispatch) => {
    dispatch({ type: 'SIGN_IN_REQUEST' });
  },
})(SignInScreen);