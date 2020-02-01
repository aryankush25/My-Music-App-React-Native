import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import styled from 'styled-components';
import { useSwitchNavigation } from '../hooks/navigationHooks';
import AuthNavigators from './AuthNavigators';
import AppNavigators from './AppNavigators';

const InitialLoaderContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InitialLoadingNavigator = props => {
  useSwitchNavigation({ navigation: props.navigation });

  return (
    <InitialLoaderContainer>
      <ActivityIndicator size="large" color="#0000ff" />
    </InitialLoaderContainer>
  );
};

export default createAppContainer(
  createSwitchNavigator(
    {
      InitialLoading: InitialLoadingNavigator,
      Auth: AuthNavigators,
      App: AppNavigators,
    },
    {
      initialRouteName: 'InitialLoading',
    },
  ),
);
