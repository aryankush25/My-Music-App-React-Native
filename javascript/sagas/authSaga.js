import {put, call, takeLatest} from 'redux-saga/effects';
import firebase from "firebase/app";
import "firebase/auth";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function* putSignInRequest(action) {
  yield call(delay, 2000);
  // yield put({type: 'SIGN_IN_SUCCESS'});
  yield put({type: 'SIGN_IN_FAILURE'});
}

export function* putSignUpRequest(action) {
  yield put({type: 'LOADING_START'});

  const {email, password} = action.values;

  try {
    yield firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const user = yield firebase.auth().currentUser;

    console.log('$$$$ user', user);

    yield put({type: 'SIGN_UP_SUCCESS'});

  } catch (error) {
    console.log('$$$$ error', error.toString());
    yield put({type: 'SIGN_UP_FAILURE'});
  }

  console.log("outside try catch")
  yield put({type: 'LOADING_END'});
}

export default [
  takeLatest('SIGN_IN_REQUEST', putSignInRequest),
  takeLatest('SIGN_UP_REQUEST', putSignUpRequest)
];
