import React from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';
import {reduxForm} from 'redux-form';
import styled from 'styled-components';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import {signInObject, signUpObject} from './helper.js';

const SignInSignUpFormWrapper = styled(ImageBackground)`
  flex: 1;
  background-color: #14182d;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SignInSignUpForm = props => {
  const isSignInForm = props.formFor === 'SignIn';
  const defineObject = isSignInForm ? signInObject : signUpObject;

  return (
    <SignInSignUpFormWrapper source={defineObject.bgImage}>
      <SafeAreaView />
      <Header
        title={defineObject.header.title}
        label={defineObject.header.label}
        labelImage={defineObject.header.labelImage}
      />
      <Form
        handleSubmit={props.handleSubmit}
        fields={defineObject.form.fields}
        buttonLabel={defineObject.form.buttonLabel}
        buttonColor={defineObject.form.buttonColor}
        buttonWidth={defineObject.form.buttonWidth}
        forgotPassword={defineObject.form.forgotPassword}
        onClickForgotPassword={props.onClickForgotPassword}
      />
      <Footer />
    </SignInSignUpFormWrapper>
  );
};

export default reduxForm({
  form: 'signInSignUpForm',
})(SignInSignUpForm);
