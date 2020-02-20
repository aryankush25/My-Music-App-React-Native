import React, { useState } from 'react';
import styled from 'styled-components';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import * as R from 'ramda';
import { useSelector } from 'react-redux';
import ScreenContainer from '../../containers/ScreenContainer';
import Header from '../../components/SharedComponents/Header';
import userDefaultImage from '../../assets/icons/user-male.png';
import editButtonImage from '../../assets/icons/edit-pencil.png';

const NameText = styled(Text)`
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  font-family: Georgia-Italic;
`;

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

const EditButton = styled(TouchableOpacity)`
  border-radius: 100;
  padding: 10px;
`;

const EditButtonImage = styled(Image)`
  height: 20px;
  width: 20px;
`;

const UserInfoView = styled(View)`
  padding: 30px 30px;
  align-items: flex-start;
`;

const UserInfoBlockContainer = styled(View)`
  display: flex;
  margin: 10px 0;
  width: 100%;
`;

const LabelText = styled(Text)`
  font-size: 14px;
  color: #bfbfbf;
  margin-bottom: 5px;
`;

const ValueText = styled(Text)`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;

const ErrorText = styled(Text)`
  font-size: 14px;
  color: #fe2851;
  font-weight: bold;
`;

const UserInfoBlock = ({ label, value }) => {
  return (
    <UserInfoBlockContainer>
      <LabelText>{label}</LabelText>
      {value && <ValueText>{value}</ValueText>}
      {!value && <ErrorText>Not Provided</ErrorText>}
    </UserInfoBlockContainer>
  );
};

const UserInfo = props => {
  return (
    <UserInfoView>
      <UserInfoBlock label="Email" value={props.email} />
      <UserInfoBlock label="Phone Number" value={props.phoneNumber} />
      <UserInfoBlock label="Birthday" value={props.phoneNumber} />
      <UserInfoBlock label="Gender" value={props.phoneNumber} />
    </UserInfoView>
  );
};

const UserNameImage = props => {
  return (
    <ImageNameView>
      <UserDefaultImage source={props.photoURL || userDefaultImage} />
      <NameText>{props.displayName}</NameText>
    </ImageNameView>
  );
};

const ProfileScreen = props => {
  const [isEditingModeEnable, setIsEditingModeOnEnable] = useState(false);
  const { displayName, photoURL, email, phoneNumber } = useSelector(state =>
    R.pathOr({}, ['authReducer', 'currentUser'], state)
  );

  return (
    <ScreenContainer center={false}>
      <SafeAreaView />
      <Header
        title="My Profile"
        onPressHandler={() => props.navigation.goBack()}
        rightComponent={
          !isEditingModeEnable && (
            <EditButton onPress={() => setIsEditingModeOnEnable(true)}>
              <EditButtonImage source={editButtonImage} />
            </EditButton>
          )
        }
      />

      <UserNameImage
        photoURL={photoURL}
        displayName={displayName}
        isEditingModeEnable={isEditingModeEnable}
      />

      <UserInfo
        displayName={displayName}
        email={email}
        phoneNumber={phoneNumber}
        isEditingModeEnable={isEditingModeEnable}
      />
    </ScreenContainer>
  );
};

export default ProfileScreen;
