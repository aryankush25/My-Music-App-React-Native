import React, { useState } from 'react';
import styled from 'styled-components';
import { SafeAreaView, Image, TouchableOpacity } from 'react-native';
import * as R from 'ramda';
import { useSelector } from 'react-redux';
import ScreenContainer from '../../containers/ScreenContainer';
import Header from '../../components/SharedComponents/Header';
import UserInfo from './UserInfo';
import UserNameImage from './UserNameImage';
import editButtonImage from '../../assets/icons/edit-pencil.png';

const EditButton = styled(TouchableOpacity)`
  border-radius: 100;
  padding: 10px;
`;

const EditButtonImage = styled(Image)`
  height: 20px;
  width: 20px;
`;

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
