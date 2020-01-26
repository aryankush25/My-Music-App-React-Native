import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useDefaultAuth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.authReducer.loggedIn);

  const fetchLoginData = useCallback(() => dispatch({type: 'LOGIN_REQUEST'}), [
    dispatch,
  ]);

  useEffect(() => {
    fetchLoginData();
  }, []);

  return {isLoggedIn};
};
