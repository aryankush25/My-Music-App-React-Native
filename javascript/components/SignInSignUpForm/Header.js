import React from 'react';
import {SafeAreaView, Text, View, TextInput, StyleSheet} from 'react-native';
import styled from 'styled-components';

const HeaderFooterContainer = styled(View)`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const HeaderContainerText = styled(Text)`
  color: white;
  font-size: 36;
`;

const Header = () => {
  return (
    <HeaderFooterContainer>
      <HeaderContainerText>Account Registration</HeaderContainerText>
    </HeaderFooterContainer>
  );
};

export default Header;
