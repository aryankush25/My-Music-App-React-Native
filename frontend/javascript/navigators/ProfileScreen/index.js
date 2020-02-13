import React from 'react';
import { View, Text, Button } from 'react-native';
import ScreenContainer from '../../containers/ScreenContainer';

const ProfileScreen = props => {
  return (
    <ScreenContainer>
      <Text>ProfileScreen</Text>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </ScreenContainer>
  );
};

export default ProfileScreen;
