import React from 'react';
import {View, Text, Button} from 'react-native';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';

const HomeScreen = props => {
  console.log('HomeScreen props', props);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
};

export default withMappedNavigationParams()(HomeScreen);
