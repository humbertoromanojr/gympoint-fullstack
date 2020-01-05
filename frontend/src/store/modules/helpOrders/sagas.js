import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getHelpOrdersSuccess } from './actions';

export function* getHelpOrders() {
  try {
    const response = yield call(api.get, 'help-orders');

    yield put(getHelpOrdersSuccess(response.data));
  } catch (error) {
    toast.error('Falha: Problemas na listagens das Help orders');
  }
}

export function* updateHelpOrder({ payload }) {
  try {
    const { id, answer } = payload;

    yield call(api.put, `help-orders/${id}/answer`, { answer });

    toast.success('Resposta ao Pedido de auxílio enviado com sucesso');
  } catch (error) {
    toast.error('Falha: Resposta ao Pedido de auxílio não enviado com sucesso');
  }
}

export default all([
  takeLatest('@helpOrder/GET_REQUEST', getHelpOrders),
  takeLatest('@helpOrder/UPDATE_REQUEST', updateHelpOrder),
]);
