import React from 'react';
import styled from 'styled-components';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import backIcon from '../../../assets/icons/back.png';

const HeaderContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 5px;
  position: relative;
  border-bottom-width: 2;
  border-bottom-color: #bfbfbf;
`;

const LeftContainer = styled(View)`
  align-items: flex-start;
  display: flex;
  width: 25%;
`;

const BackButton = styled(TouchableOpacity)`
  border-radius: 100;
  padding: 10px;
`;

const BackIcon = styled(Image)`
  height: 20px;
  width: 20px;
`;

const MiddleContainer = styled(View)`
  align-items: center;
  display: flex;
  width: 50%;
`;

const CustomText = styled(Text)`
  color: #ffffff;
  font-size: 18px;
`;

const RightContainer = styled(View)`
  align-items: flex-end;
  display: flex;
  width: 25%;
`;

const Header = ({ title, onPressHandler, rightComponent }) => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <BackButton onPress={onPressHandler}>
          <BackIcon source={backIcon} />
        </BackButton>
      </LeftContainer>

      <MiddleContainer>
        <CustomText>{title}</CustomText>
      </MiddleContainer>

      <RightContainer>{rightComponent}</RightContainer>
    </HeaderContainer>
  );
};

export default Header;
