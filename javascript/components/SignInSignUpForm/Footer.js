import React from 'react';
import {Text, View, Image} from 'react-native';
import styled from 'styled-components';
import musicAppLogo from '../../assets/images/music-app-icon.png';

const FooterContainer = styled(View)`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const FooterImage = styled(Image)`
  height: 70px;
  width: 70px;
  margin-bottom: 20px;
`;

const FooterText = styled(Text)`
  color: white;
  font-size: 20;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage source={musicAppLogo} />
      <FooterText>Agree to the</FooterText>
      <FooterText>Terms of Service & Privacy Policy</FooterText>
    </FooterContainer>
  );
};
export default Footer;
