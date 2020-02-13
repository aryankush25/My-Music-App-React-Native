import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SongsScreen = props => {
  return (
    <View style={styles.container}>
      <Text>SongsScreen</Text>
    </View>
  );
};

export default SongsScreen;
