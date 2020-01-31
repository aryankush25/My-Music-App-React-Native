import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSwitchNavigation } from '../../hooks/navigationHooks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = props => {
  const dispatch = useDispatch();

  useSwitchNavigation({ navigation: props.navigation });

  signOutAsync = async () => {
    dispatch({ type: 'SIGN_OUT_REQUEST' });
  };

  return (
    <View style={styles.container}>
      <Button title="Actually, sign me out :)" onPress={signOutAsync} />
    </View>
  );
};

export default HomeScreen;
