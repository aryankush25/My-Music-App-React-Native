import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const AuthNavigators = createBottomTabNavigator(
  {
    'Sign In': SignInScreen,
    'Sign Up': SignUpScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        let iconColor = focused ? 'white' : 'grey';
        if (routeName === 'Sign In') {
          iconName = 'person';
        } else if (routeName === 'Sign Up') {
          iconName = 'person-add';
        }
        return <Icon name={iconName} color={iconColor} />;
      },
    }),
    tabBarOptions: {
      inactiveTintColor: 'gray',
      activeTintColor: 'white',
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: '#14192D',
        paddingTop: 4,
      },
    },
  },
);

export default AuthNavigators;
