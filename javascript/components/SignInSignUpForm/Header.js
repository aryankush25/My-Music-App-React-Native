import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const HeaderContainer = styled(View)`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const TitleText = styled(Text)`
  color: white;
  font-size: 20;
`;

const HeaderText = styled(Text)`
  color: white;
  font-size: 36;
  margin-top: 60px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TitleText>Sign Up</TitleText>
      <HeaderText>Account Registration</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
