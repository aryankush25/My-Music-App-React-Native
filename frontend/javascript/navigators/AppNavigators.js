import * as React from 'react';
import { Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from '../components/CustomDrawerContent';
import ScreenContainer from '../containers/ScreenContainer';

function HomeScreen({ navigation }) {
  return (
    <ScreenContainer>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </ScreenContainer>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <ScreenContainer>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </ScreenContainer>
  );
}

const Drawer = createDrawerNavigator();

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#14192d',
          width: 300,
        }}
        keyboardDismissMode
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
