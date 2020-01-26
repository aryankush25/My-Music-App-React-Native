import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import styled from 'styled-components';
import {useDefaultAuth} from '../hooks/authHooks';
import AuthNavigators from './AuthNavigators';
import AppNavigators from './AppNavigators';

const InitialLoaderContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InitialLoadingNavigator = props => {
  const {isLoggedIn} = useDefaultAuth();

  const changeNavigator = useCallback(() => {
    if (typeof isLoggedIn === 'boolean') {
      props.navigation.navigate(isLoggedIn ? 'App' : 'Auth');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    changeNavigator();
  }, [isLoggedIn]);

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
