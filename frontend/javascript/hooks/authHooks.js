import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as R from 'ramda';

export const useDefaultAuth = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(state => state.authReducer.isSignedIn);

  const fetchSignInData = useCallback(
    () => dispatch({ type: 'SIGN_IN_REQUEST' }),
    [dispatch],
  );

  useEffect(() => {
    fetchSignInData();
  }, []);

  return { isSignedIn };
};

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
