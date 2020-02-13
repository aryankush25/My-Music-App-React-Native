import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  }
});

const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button
        title="Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

export default ProfileScreen;
