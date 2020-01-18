import React from 'react';
import { Button, Image } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {CatalogueScreen,SearchResultsScreen,
BagScreen,CategoryScreen,ProductScreen,SearchScreen
} from "./MyScreens"
 
const CatalogueStack = createStackNavigator(
  {
    CatalogueScreen: { screen: CatalogueScreen },
    ProductScreen: { screen: ProductScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      title: 'Catalogue',
    },
  }
);
 
const CategoryStack = createStackNavigator(
  {
    ProductScreen: { screen: ProductScreen },
    BagScreen: { screen: BagScreen },
    CategoryScreen: { screen: CategoryScreen },
  },
  {
    defaultNavigationOptions: {

      headerStyle: {
        backgroundColor: '#000',
      },
      headerTintColor: '#fff',
      title: 'Category',
    },
  }
);
 
const App = createBottomTabNavigator(
  {
    CatalogueStack: { screen: CatalogueStack },
    CategoryStack: { screen: CategoryStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'CatalogueStack') {
          return (
            <Image
              source={
                focused
                  ? require('./logo1.png')
                  : require('./logo1.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        } else if (routeName === 'CategoryStack') {
          return (
            <Image
              source={
                focused
                  ? require('./logo1.png')
                  : require('./logo1.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);