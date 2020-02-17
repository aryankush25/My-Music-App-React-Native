import React from 'react';
import styled from 'styled-components';
import { View, Text, Dimensions, SafeAreaView } from 'react-native';
import ScreenContainer from '../../containers/ScreenContainer';
import Header from '../../components/SharedComponents/Header';

var { height, width } = Dimensions.get('window');

const ProfileScreen = props => {
  return (
    <ScreenContainer center={false}>
      <SafeAreaView />
      <Header
        title="My Profile"
        onPressHandler={() => props.navigation.goBack()}
      />
    </ScreenContainer>
  );
};

export default ProfileScreen;
