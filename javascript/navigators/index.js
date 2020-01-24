import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {useSelector} from 'react-redux';
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
  const isLoggedIn = useSelector(state => state.authReducer.loggedIn);

  checkSignedIn = async () => {
    await setTimeout(() => {}, 3000);
    props.navigation.navigate(isLoggedIn ? 'App' : 'Auth');
  };

  checkSignedIn();

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
