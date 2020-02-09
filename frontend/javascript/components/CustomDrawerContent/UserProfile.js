import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import userDefaultImage from '../../assets/images/avatar.png';

const UserProfileWrapper = styled(TouchableOpacity)`
  margin: 20px 0;
  margin-left: 20px;
  padding-bottom: 20px;
  padding-right: 10px;
  border-bottom-width: 2;
  border-bottom-color: #bfbfbf;
  display: flex;
  flex-direction: row;
`;

const TextBlock = styled(View)`
  flex: 1;
`;

const HeadingText = styled(Text)`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const NormalText = styled(Text)`
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 5px;
`;

const ImageBlock = styled(View)``;

const UserDefaultImage = styled(Image)`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50;
  border-color: #ffffff;
  margin: 10px;
`;

const UserProfile = () => {
  return (
    <UserProfileWrapper>
      <TextBlock>
        <HeadingText>Aryan Agarwal</HeadingText>
        <NormalText>+918171256946</NormalText>
        <NormalText>aryankush025@gmail.com</NormalText>
      </TextBlock>
      <ImageBlock>
        <UserDefaultImage source={userDefaultImage} />
      </ImageBlock>
    </UserProfileWrapper>
  );
};

export default UserProfile;
