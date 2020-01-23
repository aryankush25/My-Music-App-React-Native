import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const AppNavigator = createBottomTabNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'SignIn',
  },
);

export default createAppContainer(AppNavigator);
