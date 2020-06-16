import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';
import * as firebase from 'firebase';
import { userActions } from '../actions';

// WORKERS

function* loginWorker() {
  try {
    yield put(userActions.login.success());
  } catch (error) {
    yield put(userActions.login.failure(error));
  }
}

function* signUpWorker({ payload: { email, password } }) {
  try {
    const auth = firebase.auth();
    const result = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password,
    );
    yield put(userActions.signUp.success(result));
  } catch (error) {
    yield put(userActions.signUp.failure(error));
  }
}

// WATCHERS

function* loginWatcher() {
  yield takeLatest(userActions.login.call, loginWorker);
}

function* signUpWatcher() {
  yield takeLatest(userActions.signUp.call, signUpWorker);
}

export {
  loginWatcher,
  signUpWatcher,
};
