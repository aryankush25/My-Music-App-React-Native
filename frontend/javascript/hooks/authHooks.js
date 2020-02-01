import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';

export const useDefaultAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      dispatch({ type: 'FETCH_IS_SIGNED_IN_REQUEST', user });
    });
  }, []);
};
