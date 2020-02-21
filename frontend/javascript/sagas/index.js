import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import updateProfileSaga from './updateProfileSaga';

export const tasks = [...authSaga, ...updateProfileSaga];

function* rootSaga() {
  yield all(tasks);
}

export default rootSaga;
