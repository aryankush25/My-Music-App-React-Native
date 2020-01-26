import {takeLatest, put, call} from 'redux-saga/effects';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function* putLoginRequest(action) {
  yield call(delay, 2000);
  // yield put({type: 'LOGIN_SUCCESS'});
  yield put({type: 'LOGOUT_FAILURE'});
}

export default [takeLatest('LOGIN_REQUEST', putLoginRequest)];
