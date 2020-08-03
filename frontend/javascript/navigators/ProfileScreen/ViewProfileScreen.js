import React from 'react';
import * as R from 'ramda';
import { useSelector } from 'react-redux';
import ProfileScreen from './index';

const ViewProfileScreen = props => {
  const { values } = useSelector(state => ({
    values: R.pathOr({}, ['authReducer', 'currentUser'], state)
  }));

  return (
    <ProfileScreen isEditingModeEnable={false} values={values} {...props} />
  );
};

export default ViewProfileScreen;
