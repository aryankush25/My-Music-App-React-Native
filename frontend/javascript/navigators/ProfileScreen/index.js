import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { SafeAreaView, Image, TouchableOpacity, View } from 'react-native';
import * as R from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, initialize, change } from 'redux-form';
import ImagePicker from 'react-native-image-picker';
import ScreenContainer from '../../containers/ScreenContainer';
import Header from '../../components/SharedComponents/Header';
import UserInfo from './UserInfo';
import UserNameImage from './UserNameImage';
import CustomButton from '../../components/SharedComponents/CustomButton';
import KeyboardAvoidingScrollView from '../../containers/KeyboardAvoidingScrollView';
import { isPresent } from '../../utils/helper';
import editButtonImage from '../../assets/icons/edit-pencil.png';

const MY_PROFILE_FORM = 'myProfileForm';

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
  const dispatch = useDispatch();
  const [isEditingModeEnable, setIsEditingModeOnEnable] = useState(false);

  const { values, initialValues } = useSelector(state => ({
    values: R.pathOr({}, ['form', MY_PROFILE_FORM, 'values'], state),
    initialValues: R.pathOr({}, ['authReducer', 'currentUser'], state)
  }));

  useEffect(() => {
    const { displayName, photoURL, email, phoneNumber } = initialValues;
    dispatch(
      initialize(MY_PROFILE_FORM, {
        displayName,
        photoURL,
        email,
        phoneNumber,
        birthday,
        gender
      })
    );
  }, []);

  const {
    displayName,
    photoURL,
    email,
    phoneNumber,
    birthday,
    gender
  } = values;

  const goBack = useCallback(() => {
    if (isEditingModeEnable) {
      setIsEditingModeOnEnable(false);
      props.reset();
    } else {
      props.navigation.goBack();
    }
  }, [isEditingModeEnable]);

  const updateFormField = useCallback(
    (key, value) => dispatch(change(MY_PROFILE_FORM, key, value)),
    []
  );

  const imageSelectionHandler = useCallback(
    mode => {
      if (mode === 'uploadMode') {
        ImagePicker.showImagePicker(
          {
            title: 'Select Avatar',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          },
          response => {
            console.log('Response = ', response);

            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              const source = {
                type: response.type,
                uri: 'data:image/jpeg;base64,' + response.data,
                fileName: isPresent(response.fileName)
                  ? response.fileName
                  : 'My Avatar'
              };

              updateFormField('photoURL', source);
            }
          }
        );
      } else {
        updateFormField('photoURL', null);
      }
    },
    [updateFormField]
  );

  return (
    <ScreenContainer center={false}>
      <SafeAreaView />
      <Header
        title="My Profile"
        onPressHandler={goBack}
        rightComponent={
          !isEditingModeEnable && (
            <EditButton onPress={() => setIsEditingModeOnEnable(true)}>
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
          imageButtonAction={imageSelectionHandler}
        />

        <UserInfo
          displayName={displayName}
          email={email}
          phoneNumber={phoneNumber}
          birthday={birthday}
          gender={gender}
          isEditingModeEnable={isEditingModeEnable}
          updateFormField={updateFormField}
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

export default reduxForm({
  form: MY_PROFILE_FORM,
  onSubmit: (values, dispatch) => {
    console.log('My Profile Values', values);
    dispatch({ type: 'UPDATE_PROFILE_REQUEST', values });
  }
})(ProfileScreen);
