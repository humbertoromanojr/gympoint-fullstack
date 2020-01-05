import { takeLatest, call, put, all } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import api from '~/services/api';

import { getCheckInsSuccess } from './actions';

export function* getCheckIns() {
  try {
    const student_id = yield AsyncStorage.getItem('id');

    const response = yield call(api.get, `students/${student_id}/checkins`);

    yield put(getCheckInsSuccess(response.data));
  } catch (error) {
    Alert.alert('ERROR', 'Problemas na listagens dos Check-In.');
  }
}

export function* updateCheckIn() {
  try {
    const student_id = yield AsyncStorage.getItem('id');

    yield call(api.put, `students/${student_id}/checkins`);

    Alert.alert('SUCCESS', 'Check-In atualizado com sucesso.');
  } catch (error) {
    Alert.alert('ERROR', 'Check-In não foi atualizado.');
  }
}

export function* createCheckIn({ payload }) {
  try {
    const { student_id } = payload;

    // const student_id = yield AsyncStorage.getItem('id');

    yield call(api.post, `students/${student_id}/checkins`, {
      student_id,
    });

    Alert.alert('SUCCESS: Check-In foi criado com sucesso.');
  } catch (error) {
    Alert.alert(
      'ERROR: Você já atingiu o limite de 5 durante 7 dias corridos.'
    );
  }
}

export default all([
  takeLatest('@checkIn/GET_REQUEST', getCheckIns),
  takeLatest('@checkIn/UPDATE_REQUEST', updateCheckIn),
  takeLatest('@checkIn/CREATE_REQUEST', createCheckIn),
]);
