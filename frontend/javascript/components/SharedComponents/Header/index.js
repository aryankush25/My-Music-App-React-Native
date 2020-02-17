import React from 'react';
import styled from 'styled-components';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

var { height, width } = Dimensions.get('window');

const HeaderContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 10px 5px;
  position: relative;
`;

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  left: 10;
  top: 10;
  display: flex;
  flex-direction: row;
`;

const CustomText = styled(Text)`
  color: #ffffff;
  font-size: 18px;
`;

const Header = ({ title, backButtonText = 'Back', onPressHandler }) => {
  return (
    <HeaderContainer>
      <BackButton title="Back" onPress={onPressHandler}>
        <Icon name="keyboard-arrow-left" color="white" />
        <CustomText>{backButtonText}</CustomText>
      </BackButton>

      <View>
        <CustomText>{title}</CustomText>
      </View>
    </HeaderContainer>
  );
};

export default Header;
