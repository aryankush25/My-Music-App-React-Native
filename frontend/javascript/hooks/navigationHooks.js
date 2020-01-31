import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useSwitchNavigation = ({ navigation }) => {
  const isSignedIn = useSelector(state => state.authReducer.isSignedIn);

  const changeNavigator = useCallback(() => {
    if (typeof isSignedIn === 'boolean' && navigation) {
      navigation.navigate(isSignedIn ? 'App' : 'Auth');
    }
  }, [isSignedIn, navigation]);

  useEffect(() => {
    changeNavigator();
  }, [isSignedIn]);

  return { isSignedIn };
};
