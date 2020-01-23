import React from 'react';
import SignInSignUpForm from '../../components/SignInSignUpForm';

const SignInScreen = () => {
  const onSubmitSignIn = values => {
    console.log('SignInScreen values', values);
  };
  const onClickForgotPassword = values => {
    console.log('onClickForgotPassword', values);
  };

  return (
    <SignInSignUpForm
      formFor="SignIn"
      onSubmit={onSubmitSignIn}
      onClickForgotPassword={onClickForgotPassword}
    />
  );
};

export default SignInScreen;
