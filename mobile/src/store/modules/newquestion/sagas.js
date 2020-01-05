import { all, takeLatest, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

import api from '~/services/api';

export function* createNewQuestion({ payload }) {
  try {
    const { question } = payload;

    if (question === '' || null) {
      Alert.alert('OPSS: Por favor, preencha o seu pedido antes de enviar.');

      return;
    }

    const student_id = yield AsyncStorage.getItem('id');

    yield call(api.post, `students/${student_id}/help-orders`, {
      question,
      student_id,
    });

    Alert.alert('SUCCESS: O seu pedido foi enviado.');
  } catch (error) {
    Alert.alert('ERROR: O seu pedido não foi enviado, tente mais tarde.');
  }
}

export default all([
  takeLatest('@newQuestion/CREATE_REQUEST', createNewQuestion),
]);
