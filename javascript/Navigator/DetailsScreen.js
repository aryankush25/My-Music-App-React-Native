import React from 'react';
import {View, Text, Button} from 'react-native';
import {withMappedNavigationParams} from 'react-navigation-props-mapper';

const DetailsScreen = props => {
  console.log('DetailsScreen props', props);
  const {navigation} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>
        itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
      </Text>
      <Text>
        otherParam:
        {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
      </Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
    </View>
  );
};

export default withMappedNavigationParams()(DetailsScreen);
