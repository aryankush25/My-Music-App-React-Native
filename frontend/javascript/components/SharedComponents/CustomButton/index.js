import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled(View)`
  padding-top: 40;
  align-items: center;
  width: 100%;
`;

const TextWrapper = styled(View)`
  width: ${props => (props.width ? props.width : 300)};
  background-color: ${props => (props.color ? props.color : '#fe2851')};
  height: 50;
  align-items: center;
  border-radius: 50px;
  ${props =>
    props.disabled &&
    css`
      opacity: 0.3;
    `}
`;

const ButtonText = styled(Text)`
  text-align: center;
  margin: auto;
  color: white;
  font-size: 20;
`;

const CustomButton = props => {
  return (
    <ButtonWrapper>
      <TouchableOpacity disabled={props.disabled} onPress={props.onPress}>
        <TextWrapper
          color={props.color}
          width={props.width}
          disabled={props.disabled}>
          <ButtonText>{props.label}</ButtonText>
        </TextWrapper>
      </TouchableOpacity>
    </ButtonWrapper>
  );
};

export default CustomButton;
