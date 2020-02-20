import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styled, { css } from 'styled-components';

const MyTextInputWrapper = styled(View)`
  ${props =>
    !props.noWrapper &&
    css`
      width: 100%;
      border-bottom-width: 2;
      border-bottom-color: #bfbfbf;
      padding: 12px 6px;
      margin-bottom: 10px;
    `}
`;

const TextInputWrapper = styled(TextInput)`
  color: white;
  height: 18;
  font-size: 18;
  padding: 0;

  ${props => props.customStyles}
`;

const Errors = styled(View)`
  width: 100%;
  align-items: flex-end;
`;

const ErrorMessage = styled(Text)`
  color: red;
  font-size: 14;
`;

const MyTextInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  ...inputProps
}) => {
  return (
    <React.Fragment>
      <MyTextInputWrapper noWrapper={inputProps.noWrapper}>
        <TextInputWrapper
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          placeholderTextColor="#bfbfbf"
        />
      </MyTextInputWrapper>
      <Errors>
        {touched &&
          ((error && <ErrorMessage>{error}</ErrorMessage>) ||
            (warning && <ErrorMessage>{warning}</ErrorMessage>))}
      </Errors>
    </React.Fragment>
  );
};

export default MyTextInput;
