import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const ButtonWrapper = styled(View)`
  padding-top: 40;
  align-items: center;
  width: 100%;
`;
const TextWrapper = styled(View)`
  width: 300;
  height: 50;
  align-items: center;
  background-color: #fe2851;
  border-radius: 50px;
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
      <TouchableOpacity onPress={props.onPress}>
        <TextWrapper>
          <ButtonText>{props.label}</ButtonText>
        </TextWrapper>
      </TouchableOpacity>
    </ButtonWrapper>
  );
};

export default CustomButton;
