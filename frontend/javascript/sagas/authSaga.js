import { put, takeLatest } from 'redux-saga/effects';
import services from '../services';

export function* putIsSignInRequest(action) {
  try {
    const user = action.user;

    if (user) {
      yield put({ type: 'FETCH_IS_SIGNED_IN_SUCCESS', payload: { user } });
    } else {
      yield put({ type: 'FETCH_IS_SIGNED_IN_FALIURE', payload: { user } });
    }
  } catch (error) {
    console.log('error', error.toString());
    yield put({ type: 'FETCH_IS_SIGNED_IN_FALIURE', payload: { user } });
  }
}

export function* putSignInRequest(action) {
  yield put({ type: 'LOADING_START' });

  const { email, password } = action.values;

  try {
    yield services.auth.signInUser(email, password);

    const user = yield services.auth.fetchCurrentUser();

    if (user) {
      yield put({ type: 'SIGN_IN_SUCCESS' });
    } else {
      yield put({ type: 'SIGN_IN_FAILURE' });
    }
  } catch (error) {
    console.log('error', error.toString());
    yield put({ type: 'SIGN_IN_FAILURE' });
  }

  yield put({ type: 'LOADING_END' });
}

export function* putSignUpRequest(action) {
  yield put({ type: 'LOADING_START' });

  const { name, email, password } = action.values;
  try {
    const user = yield services.auth.signUpUser(name, email, password);

    if (user) {
      yield put({ type: 'SIGN_UP_SUCCESS' });
    } else {
      yield put({ type: 'SIGN_UP_FAILURE' });
    }
  } catch (error) {
    console.log('error', error.toString());
    yield put({ type: 'SIGN_UP_FAILURE' });
  }

  yield put({ type: 'LOADING_END' });
}

export function* putSignOutRequest(action) {
  yield put({ type: 'LOADING_START' });

  try {
    const user = yield services.auth.signOutUser();

    if (user) {
      yield put({ type: 'SIGN_OUT_FAILURE' });
    } else {
      yield put({ type: 'SIGN_OUT_SUCCESS' });
    }
  } catch (error) {
    console.log('error', error.toString());
    yield put({ type: 'SIGN_OUT_FAILURE' });
  }

  yield put({ type: 'LOADING_END' });
}

export default [
  takeLatest('FETCH_IS_SIGNED_IN_REQUEST', putIsSignInRequest),
  takeLatest('SIGN_IN_REQUEST', putSignInRequest),
  takeLatest('SIGN_UP_REQUEST', putSignUpRequest),
  takeLatest('SIGN_OUT_REQUEST', putSignOutRequest),
];
