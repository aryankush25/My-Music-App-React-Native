import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Field} from 'redux-form';
import styled from 'styled-components';
import Button from '../SharedComponents/CustomButton';

const SignInSignUpFormContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const ForgotPasswordContainer = styled(TouchableOpacity)`
  margin-top: 20px;
`;

const ForgotPasswordText = styled(Text)`
  color: white;
  font-size: 18;
`;

const Form = props => {
  return (
    <SignInSignUpFormContainer>
      {props.fields.map((field, index) => (
        <Field
          key={index}
          name={field.name}
          component={field.component}
          placeholder={field.placeholder}
          secureTextEntry={field.secureTextEntry}
          validate={field.validate}
        />
      ))}
      <Button
        onPress={props.handleSubmit}
        label={props.buttonLabel}
        color={props.buttonColor}
        width={props.buttonWidth}
        disabled={props.disabled}
      />
      {props.forgotPassword && (
        <ForgotPasswordContainer onPress={props.onClickForgotPassword}>
          <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
        </ForgotPasswordContainer>
      )}
    </SignInSignUpFormContainer>
  );
};

export default Form;
