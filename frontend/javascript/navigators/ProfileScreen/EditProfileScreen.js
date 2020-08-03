import React, { useEffect, useCallback } from 'react';
import * as R from 'ramda';
import { useSelector, useDispatch } from 'react-redux';
import { reduxForm, initialize, change } from 'redux-form';
import ImagePicker from 'react-native-image-picker';
import { isPresent } from '../../utils/helper';
import ProfileScreen from './index';

const MY_PROFILE_FORM = 'myProfileForm';

const EditProfileScreen = props => {
  const dispatch = useDispatch();

  const { values, initialValues } = useSelector(state => ({
    values: R.pathOr({}, ['form', MY_PROFILE_FORM, 'values'], state),
    initialValues: R.pathOr({}, ['authReducer', 'currentUser'], state)
  }));

  useEffect(() => {
    const {
      displayName,
      photoURL,
      email,
      phoneNumber,
      birthday,
      gender
    } = initialValues;
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
    <ProfileScreen
      isEditingModeEnable
      values={values}
      imageSelectionHandler={imageSelectionHandler}
      updateFormField={updateFormField}
      {...props}
    />
  );
};

export default reduxForm({
  form: MY_PROFILE_FORM,
  onSubmit: (values, dispatch) => {
    console.log('My Profile Values', values);
    dispatch({ type: 'UPDATE_PROFILE_REQUEST', values });
  }
})(EditProfileScreen);
