import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';
/* import history from '~/services/history'; */

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, 'sessionstudents', {
      id,
    });

    const { token, student } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, student, id));

    if (!response) {
      Alert.alert('ERROR', 'Student no exist.');
    }

    /* history.push('/dashboard'); */
  } catch (error) {
    Alert.alert('ERROR', 'Falha na autenticação, verifique seus dados.');
    yield put(signFailure());

    /* history.push('/'); */
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  /*  history.push('/'); */
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
