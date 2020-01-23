import React from 'react';
import SignInSignUpForm from '../../components/SignInSignUpForm';

const SignInScreen = () => {
  const onSubmitSignIn = values => {
    console.log('SignInScreen values', values);
  };

  return <SignInSignUpForm formFor="SignIn" onSubmit={onSubmitSignIn} />;
};

export default SignInScreen;
