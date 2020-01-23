import React from 'react';
import SignInSignUpForm from '../../components/SignInSignUpForm';

const SignUpScreen = () => {
  const onSubmitSignUp = values => {
    console.log('SignUpScreen values', values);
  };

  return <SignInSignUpForm formFor="SignUp" onSubmit={onSubmitSignUp} />;
};

export default SignUpScreen;
