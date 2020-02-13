import React from 'react';
import { ActivityIndicator } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { useSwitchNavigation } from '../hooks/navigationHooks';
import ScreenContainer from '../containers/ScreenContainer';
import AuthNavigators from './AuthNavigators';
import AppNavigators from './AppNavigators';

const InitialLoadingNavigator = props => {
  useSwitchNavigation();

  return (
    <ScreenContainer>
      <ActivityIndicator size="large" color="#ffffff" />
    </ScreenContainer>
  );
};

export default createAppContainer(
  createSwitchNavigator(
    {
      InitialLoading: InitialLoadingNavigator,
      Auth: AuthNavigators,
      App: AppNavigators
    },
    {
      initialRouteName: 'InitialLoading'
    }
  )
);
