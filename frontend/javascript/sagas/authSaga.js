import { put, call, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function* putIsSignInRequest(action) {
  try {
    const user = yield firebase.auth().currentUser;
    if (user) {
      yield put({ type: 'FETCH_IS_SIGNED_IN_SUCCESS' });
    } else {
      yield put({ type: 'FETCH_IS_SIGNED_IN_FALIURE' });
    }
    console.log('$$$$ user', user);
  } catch (error) {
    console.log('$$$$ error', error.toString());
    yield put({ type: 'FETCH_IS_SIGNED_IN_FALIURE' });
  }
}

export function* putSignInRequest(action) {
  yield put({ type: 'LOADING_START' });

  const { email, password } = action.values;

  try {
    yield firebase.auth().signInWithEmailAndPassword(email, password);

    const user = yield firebase.auth().currentUser;

    if (user) {
      yield put({ type: 'SIGN_IN_SUCCESS' });
    } else {
      yield put({ type: 'SIGN_IN_FAILURE' });
    }
    console.log('$$$$ user', user);
  } catch (error) {
    yield put({ type: 'SIGN_IN_FAILURE' });
  }

  yield put({ type: 'LOADING_END' });
}

export function* putSignUpRequest(action) {
  yield put({ type: 'LOADING_START' });

  const { name, email, password } = action.values;
  try {
    yield firebase.auth().createUserWithEmailAndPassword(email, password);

    const user = yield firebase.auth().currentUser;

    if (user) {
      yield user.updateProfile({
        displayName: name,
      });
      yield put({ type: 'SIGN_UP_SUCCESS' });
    } else {
      yield put({ type: 'SIGN_UP_FAILURE' });
    }
    console.log('$$$$ user', user);
  } catch (error) {
    console.log('$$$$ error', error.toString());
    yield put({ type: 'SIGN_UP_FAILURE' });
  }

  yield put({ type: 'LOADING_END' });
}

export function* putSignOutRequest(action) {
  yield put({ type: 'LOADING_START' });

  try {
    yield firebase.auth().signOut();
    const user = yield firebase.auth().currentUser;

    if (user) {
      yield put({ type: 'SIGN_OUT_FAILURE' });
    } else {
      yield put({ type: 'SIGN_OUT_SUCCESS' });
    }
    console.log('$$$$ user', user);
  } catch (error) {
    console.log('$$$$ error', error.toString());
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
