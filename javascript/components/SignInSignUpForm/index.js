import React from 'react';
import {SafeAreaView, View, ImageBackground} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Button from '../InputComponents/CustomButton';
import {signInFields, signUpFields} from './helper.js';
import signInImage from '../../assets/images/signin-image.png';
import signUpImage from '../../assets/images/signup-image.png';

const SignInSignUpFormWrapper = styled(ImageBackground)`
  flex: 1;
  background-color: #14182d;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SignInSignUpFormContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Form = props => {
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
      <Button
        onPress={() => {
          console.log('Clicked');
        }}
        label="Sign Up"
      />
    </SignInSignUpFormContainer>
  );
};

const SignInSignUpForm = props => {
  console.log('$$$$ props', props);
  return (
    <SignInSignUpFormWrapper source={signUpImage}>
      <SafeAreaView />
      <Header />
      <Form />
      <Footer />
    </SignInSignUpFormWrapper>
  );
};

export default reduxForm({
  form: 'signInSignUpForm',
})(SignInSignUpForm);
