import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { getHelpOrdersSuccess } from './actions';

export function* getHelpOrders() {
  try {
    const response = yield call(api.get, `help-orders`);

    yield put(getHelpOrdersSuccess(response.data));
  } catch (error) {
    Alert.alert('ERROR', 'Problemas na listagens das Help orders.');
  }
}

export function* updateHelpOrder({ payload }) {
  try {
    const { id, answer } = payload;

    yield call(api.put, `help-orders/${id}/answer`, { answer });

    Alert.alert('SUCCESS', 'Help order atualizada com sucesso.');
  } catch (error) {
    Alert.alert('ERROR', 'Help order não foi atualizada.');
  }
}

export default all([
  takeLatest('@helpOrder/GET_REQUEST', getHelpOrders),
  takeLatest('@helpOrder/UPDATE_REQUEST', updateHelpOrder),
]);
