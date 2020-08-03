import React from 'react';
import styled from 'styled-components';
import { SafeAreaView, Image, TouchableOpacity, View } from 'react-native';
import ScreenContainer from '../../containers/ScreenContainer';
import Header from '../../components/SharedComponents/Header';
import UserInfo from './UserInfo';
import UserNameImage from './UserNameImage';
import CustomButton from '../../components/SharedComponents/CustomButton';
import KeyboardAvoidingScrollView from '../../containers/KeyboardAvoidingScrollView';
import editButtonImage from '../../assets/icons/edit-pencil.png';

const EditButton = styled(TouchableOpacity)`
  border-radius: 100;
  padding: 10px;
`;

const EditButtonImage = styled(Image)`
  height: 20px;
  width: 20px;
`;

const SaveButtonView = styled(View)`
  margin-bottom: 30px;
`;

const ProfileScreen = props => {
  const { isEditingModeEnable, values } = props;

  const {
    displayName,
    photoURL,
    email,
    phoneNumber,
    birthday,
    gender
  } = values;

  return (
    <ScreenContainer center={false}>
      <SafeAreaView />
      <Header
        title={isEditingModeEnable ? 'Edit Profile' : 'My Profile'}
        onPressHandler={() => props.navigation.goBack()}
        rightComponent={
          !isEditingModeEnable && (
            <EditButton
              onPress={() => props.navigation.navigate('EditProfile')}>
              <EditButtonImage source={editButtonImage} />
            </EditButton>
          )
        }
      />

      <KeyboardAvoidingScrollView>
        <UserNameImage
          photoURL={photoURL}
          displayName={displayName}
          isEditingModeEnable={isEditingModeEnable}
          imageButtonAction={props.imageSelectionHandler}
        />

        <UserInfo
          displayName={displayName}
          email={email}
          phoneNumber={phoneNumber}
          birthday={birthday}
          gender={gender}
          isEditingModeEnable={isEditingModeEnable}
          updateFormField={props.updateFormField}
        />

        {isEditingModeEnable && (
          <SaveButtonView>
            <CustomButton
              onPress={props.handleSubmit}
              label="Save"
              disabled={props.submitting || !props.valid}
            />
          </SaveButtonView>
        )}
      </KeyboardAvoidingScrollView>
    </ScreenContainer>
  );
};

export default ProfileScreen;
