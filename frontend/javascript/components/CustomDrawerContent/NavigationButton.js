import React from 'react';
import styled, { css } from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const NavigationButtonConatiner = styled(TouchableOpacity)`
  margin: 10px 0 0;
  padding: 10px 0;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  ${props =>
    props.highlight &&
    css`
      background-color: #fe2851;
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
      highlight={props.highlight}
      onPress={props.onPressAction}>
      <IconWrapper>
        <Icon name={props.iconName} color="white" />
      </IconWrapper>
      <CustomText>{props.label}</CustomText>
    </NavigationButtonConatiner>
  );
};

export default NavigationButton;
