import {all} from 'redux-saga/effects';
import authSaga from './authSaga';

export const tasks = [...authSaga];

function* rootSaga() {
  yield all(tasks);
}

export default rootSaga;
