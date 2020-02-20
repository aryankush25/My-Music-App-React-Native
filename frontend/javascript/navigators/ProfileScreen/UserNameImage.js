import React from 'react';
import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
import userDefaultImage from '../../assets/icons/user-male.png';

const ImageNameView = styled(View)`
  align-items: center;
  padding-top: 40px;
  padding-bottom: 10px;
`;

const UserDefaultImage = styled(Image)`
  height: 200px;
  width: 200px;
  background-color: white;
  border-radius: 10;
  border-color: #ffffff;
  margin: 10px;
`;

const NameText = styled(Text)`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  font-family: Georgia-Italic;
`;

const UserNameImage = props => {
  return (
    <ImageNameView>
      <UserDefaultImage source={props.photoURL || userDefaultImage} />
      <NameText>{props.displayName}</NameText>
    </ImageNameView>
  );
};

export default UserNameImage;
