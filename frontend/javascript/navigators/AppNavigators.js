import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from '../components/CustomDrawerContent';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { drawerNavigationObject } from '../utils/helper';
import HomeScreen from './HomeScreen';
import SongsScreen from './SongsScreen';
import PlaylistsScreen from './PlaylistsScreen';
import PeopleScreen from './PeopleScreen';
import LikedSongsScreen from './LikedSongsScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';

const Drawer = createDrawerNavigator();

const getScreen = screen => {
  switch (screen) {
    case 'home': {
      return HomeScreen;
    }
    case 'songs': {
      return SongsScreen;
    }
    case 'playlists': {
      return PlaylistsScreen;
    }
    case 'people': {
      return PeopleScreen;
    }
    case 'likedSongs': {
      return LikedSongsScreen;
    }
    case 'settings': {
      return SettingsScreen;
    }
    default: {
      return HomeScreen;
    }
  }
};

const DrawerNavigator = props => {
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
      Profile: ProfileScreen
    },
    {
      initialRouteName: 'Drawer',
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default AppNavigators;
