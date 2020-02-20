import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import * as R from 'ramda';
import { useNavigation } from 'react-navigation-hooks';
import userDefaultImage from '../../assets/icons/user-male.png';

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
  const { navigate } = useNavigation();
  const { displayName, photoURL, email, phoneNumber } = useSelector(state =>
    R.pathOr({}, ['authReducer', 'currentUser'], state)
  );

  return (
    <UserProfileWrapper onPress={() => navigate('Profile')}>
      <TextBlock>
        {displayName && <HeadingText>{displayName}</HeadingText>}
        {phoneNumber && <NormalText>{phoneNumber}</NormalText>}
        {email && <NormalText>{email}</NormalText>}
      </TextBlock>
      <ImageBlock>
        <UserDefaultImage source={photoURL || userDefaultImage} />
      </ImageBlock>
    </UserProfileWrapper>
  );
};

export default UserProfile;
