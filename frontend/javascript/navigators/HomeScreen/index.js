import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = props => {
  signOutAsync = async () => {};

  return (
    <View style={styles.container}>
      <Button title="Actually, sign me out :)" onPress={signOutAsync} />
    </View>
  );
};

export default HomeScreen;
