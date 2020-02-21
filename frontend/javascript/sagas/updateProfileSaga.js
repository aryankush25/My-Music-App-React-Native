import { put, takeLatest } from 'redux-saga/effects';
import services from '../services';

export function* putUpdateProfileRequest(action) {
  yield put({ type: 'LOADING_START' });

  const {
    displayName,
    photoURL,
    email,
    phoneNumber,
    birthday,
    gender
  } = action.values;

  try {
    const user = yield services.auth.updateUser({
      displayName,
      photoURL,
      email
    });

    if (user) {
      console.log('$$$$ user', user);
      yield put({ type: 'UPDATE_PROFILE_SUCCESS' });
    } else {
      yield put({ type: 'UPDATE_PROFILE_FAILURE' });
    }
  } catch (error) {
    console.log('error', error.toString());
    yield put({ type: 'UPDATE_PROFILE_FAILURE' });
  }

  yield put({ type: 'LOADING_END' });
}

export default [takeLatest('UPDATE_PROFILE_REQUEST', putUpdateProfileRequest)];
