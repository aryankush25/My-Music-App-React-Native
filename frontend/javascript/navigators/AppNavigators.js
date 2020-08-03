import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from '../components/CustomDrawerContent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { drawerNavigationObject } from '../utils/helper';
import { getScreen } from './utils';
import ProfileScreen from './ProfileScreen/ViewProfileScreen';
import EditProfileScreen from './ProfileScreen/EditProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const screens = Object.keys(drawerNavigationObject);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="home"
        drawerStyle={{
          backgroundColor: '#14192d',
          width: 300
        }}
        keyboardDismissMode
        drawerContent={props => <CustomDrawerContent {...props} />}>
        {screens.map((screen, index) => {
          return (
            <Drawer.Screen
              key={index}
              name={screen}
              component={getScreen(screen)}
            />
          );
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const AppNavigators = createAppContainer(
  createStackNavigator(
    {
      Drawer: DrawerNavigator,
      Profile: ProfileScreen,
      EditProfile: EditProfileScreen
    },
    {
      initialRouteName: 'Drawer',
      defaultNavigationOptions: {
        headerShown: false
      }
    }
  )
);

export default AppNavigators;
