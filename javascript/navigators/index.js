import React, {useCallback, useEffect} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {useDefaultAuth} from '../hooks/authHooks';
import AuthNavigators from './AuthNavigators';
import AppNavigators from './AppNavigators';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <StatusBar barStyle="default" />
    </View>
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
