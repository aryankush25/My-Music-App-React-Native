import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useDefaultAuth = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(state => state.authReducer.isSignedIn);

  const fetchSignInData = useCallback(
    () => dispatch({ type: 'FETCH_IS_SIGNED_IN_REQUEST' }),
    [dispatch],
  );

  useEffect(() => {
    fetchSignInData();
  }, []);

  return { isSignedIn };
};
