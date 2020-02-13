import React from 'react';
import styled, { css } from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const NavigationButtonConatiner = styled(TouchableOpacity)`
  margin: 12px 0 0;
  padding: 15px 0;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  ${props =>
    props.highlightedPink &&
    css`
      background-color: #fe2851;
    `}
  ${props =>
    props.highlightedBlue &&
    css`
      background-color: #0076ff;
    `}
`;

const IconWrapper = styled(View)`
  margin-right: 20px;
`;

const CustomText = styled(Text)`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

const NavigationButton = props => {
  return (
    <NavigationButtonConatiner
      highlightedPink={props.highlightedPink}
      highlightedBlue={props.highlightedBlue}
      onPress={props.onPressAction}>
      <IconWrapper>
        <Icon name={props.iconName} color="white" />
      </IconWrapper>
      <CustomText>{props.label}</CustomText>
    </NavigationButtonConatiner>
  );
};

export default NavigationButton;
