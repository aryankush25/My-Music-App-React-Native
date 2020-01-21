import React, {useEffect} from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';

const HomeScreen = props => {

  console.log('HomeScreen props', props);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={require('../assets/images/login-img1.png')} style={{width: '100%', height: '100%'}}>
        <Text>Home Screen</Text>
      </ImageBackground>
    </View>
  );
};

HomeScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Header title',
  };
};

export default withMappedNavigationParams()(HomeScreen);
