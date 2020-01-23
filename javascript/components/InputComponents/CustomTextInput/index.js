import React from 'react';
import {View, TextInput} from 'react-native';
import styled from 'styled-components';

const MyTextInputWrapper = styled(View)`
  width: 100%;
  border-bottom-width: 2;
  border-bottom-color: #bfbfbf;
  padding: 10px 6px;
  margin-bottom: 6px;
`;

const TextInputWrapper = styled(TextInput)`
  color: white;
  height: 18;
  font-size: 18;
`;

const MyTextInput = props => {
  const {input, ...inputProps} = props;

  return (
    <MyTextInputWrapper>
      <TextInputWrapper
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        placeholderTextColor="#bfbfbf"
      />
    </MyTextInputWrapper>
  );
};

export default MyTextInput;
