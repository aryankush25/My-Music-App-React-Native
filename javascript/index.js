import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

const FixedDimensionsBasics = () => {
  return (
    <View>
      {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} /> */}
      <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
    </View>
  );
};

const App = () => {
  return <FixedDimensionsBasics />;
};

export default App;
