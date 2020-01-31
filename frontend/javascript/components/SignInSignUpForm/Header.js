import React from 'react';
import { Text, View, Image } from 'react-native';
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
  margin-bottom: 80px;
`;

const LabelImage = styled(Image)`
  height: 50px;
  width: 50px;
  margin-bottom: 20px;
`;

const LabelText = styled(Text)`
  color: white;
  font-size: 36;
`;

const Header = props => {
  return (
    <HeaderContainer>
      <TitleText>{props.title}</TitleText>
      {props.labelImage && <LabelImage source={props.labelImage} />}
      <LabelText>{props.label}</LabelText>
    </HeaderContainer>
  );
};

export default Header;
