import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SafeAreaView, Image, TouchableOpacity } from 'react-native';
import * as R from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, initialize } from 'redux-form';
import ScreenContainer from '../../containers/ScreenContainer';
import Header from '../../components/SharedComponents/Header';
import UserInfo from './UserInfo';
import UserNameImage from './UserNameImage';
import editButtonImage from '../../assets/icons/edit-pencil.png';
import CustomButton from '../../components/SharedComponents/CustomButton';

const MY_PROFILE_FORM = 'myProfileForm';

const EditButton = styled(TouchableOpacity)`
  border-radius: 100;
  padding: 10px;
`;

const EditButtonImage = styled(Image)`
  height: 20px;
  width: 20px;
`;

const ProfileScreen = props => {
  const dispatch = useDispatch();
  const [isEditingModeEnable, setIsEditingModeOnEnable] = useState(false);

  const { values, initialValues } = useSelector(state => ({
    values: R.pathOr({}, ['form', MY_PROFILE_FORM, 'values'], state),
    initialValues: R.pathOr({}, ['authReducer', 'currentUser'], state)
  }));

  useEffect(() => {
    const { displayName, photoURL, email, phoneNumber } = initialValues;
    dispatch(
      initialize(MY_PROFILE_FORM, { displayName, photoURL, email, phoneNumber })
    );
  }, []);

  const { displayName, photoURL, email, phoneNumber } = values;

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
        imageButtonAction={mode => {
          console.log('#### mode', mode);
        }}
      />

      <UserInfo
        displayName={displayName}
        email={email}
        phoneNumber={phoneNumber}
        isEditingModeEnable={isEditingModeEnable}
      />

      {isEditingModeEnable && (
        <CustomButton
          onPress={props.handleSubmit}
          label="Save"
          disabled={false}
        />
      )}
    </ScreenContainer>
  );
};

export default reduxForm({
  form: MY_PROFILE_FORM,
  onSubmit: (values, dispatch) => {
    console.log('My Profile Values', values);
  },
  forceUnregisterOnUnmount: true,
  enableReinitialize: true,
  destroyOnUnmount: false
})(ProfileScreen);
