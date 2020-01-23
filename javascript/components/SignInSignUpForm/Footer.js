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

const FooterContainerText = styled(Text)`
  color: white;
  font-size: 20;
`;

const Footer = () => {
  return (
    <HeaderFooterContainer>
      <FooterContainerText>Agree to the</FooterContainerText>
      <FooterContainerText>
        Terms of Service & Privacy Policy
      </FooterContainerText>
    </HeaderFooterContainer>
  );
};
export default Footer;
