import React from 'react';
import {SafeAreaView, Text, View, TextInput, StyleSheet} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import {signInFields, signUpFields} from './helper.js';

const SignInSignUpFormWrapper = styled(View)`
  flex: 1;
  background-color: #14182d;
  justify-content: center;
  align-items: center;
`;

const SignInSignUpFormContainer = styled(View)`
  flex: 1;
  background-color: #14182d;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Form = () => {
  return (
    <SignInSignUpFormContainer>
      {signUpFields.map(field => (
        <Field
          name={field.name}
          component={field.component}
          placeholder={field.placeholder}
          secureTextEntry={field.secureTextEntry}
        />
      ))}
    </SignInSignUpFormContainer>
  );
};

const SignInSignUpForm = () => {
  return (
    <React.Fragment>
      <SafeAreaView />
      <SignInSignUpFormWrapper>
        <Header />
        <Form />
        <Footer />
      </SignInSignUpFormWrapper>
    </React.Fragment>
  );
};

export default reduxForm({
  form: 'signInSignUpForm',
})(SignInSignUpForm);
