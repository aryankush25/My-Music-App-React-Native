import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const PlaylistsScreen = props => {
  return (
    <View style={styles.container}>
      <Text>PlaylistsScreen</Text>
    </View>
  );
};

export default PlaylistsScreen;
