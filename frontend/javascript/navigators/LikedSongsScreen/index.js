import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const LikedSongs = props => {
  return (
    <View style={styles.container}>
      <Text>LikedSongsScreen</Text>
    </View>
  );
};

export default LikedSongs;
