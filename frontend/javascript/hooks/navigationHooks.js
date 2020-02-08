import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

export const useSwitchNavigation = () => {
  const isSignedIn = useSelector(state => state.authReducer.isSignedIn);
  const { navigate } = useNavigation();

  const changeNavigator = useCallback(() => {
    if (typeof isSignedIn === 'boolean') {
      navigate(isSignedIn ? 'App' : 'Auth');
    }
  }, [isSignedIn]);

  useEffect(() => {
    changeNavigator();
  }, [isSignedIn]);

  return { isSignedIn };
};
