import React from 'react';
import styled from 'styled-components';
import { View, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSwitchNavigation } from '../../hooks/navigationHooks';
import UserProfile from './UserProfile';
import NavigationButton from './NavigationButton';

const CustomDrawerContentContainer = styled(View)`
  padding: 20px 0;
  margin-bottom: 20px;
  flex: 1;
`;

const NavigationButtonWrapper = styled(View)`
  flex: 1;
`;

const CustomDrawerContent = props => {
  const dispatch = useDispatch();

  useSwitchNavigation();

  signOutAsync = async () => {
    dispatch({ type: 'SIGN_OUT_REQUEST' });
  };

  return (
    <CustomDrawerContentContainer>
      <SafeAreaView />

      <UserProfile />

      <NavigationButtonWrapper>
        <NavigationButton label="Home" iconName="home" />
        <NavigationButton label="Songs" iconName="headset" />
        <NavigationButton label="Playlists" iconName="list" />
        <NavigationButton label="People" iconName="people" />
        <NavigationButton label="Liked Songs" iconName="favorite" />
        <NavigationButton label="Settings" iconName="settings" />
      </NavigationButtonWrapper>

      <NavigationButton
        label="Sign Out"
        iconName="power-settings-new"
        highlight
        onPressAction={signOutAsync}
      />

      <SafeAreaView />
    </CustomDrawerContentContainer>
  );
};

export default CustomDrawerContent;
