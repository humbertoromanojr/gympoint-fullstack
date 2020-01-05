import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getPlansSuccess } from './actions'

export function* getPlans() {
  try {
    const response = yield call(api.get, 'plans');

    yield put(getPlansSuccess(response));

  } catch (error) {
    toast.error('Falha: Problemas na listagens dos planos');
  }
}

export function* createPlan({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'plans', data);

    toast.success('Plano criado com sucesso');
  } catch (error) {
    toast.error('Falha: Plano não foi criado');
  }
}

export function* updatePlan({ payload }) {
  try {
    const { id, data } = payload;

    yield call(api.put, `plans/${id}`, data);

    toast.success('Plano alterado com sucesso');
  } catch (error) {
    toast.error('Falha: Plano não foi alterado');
  }
}

export function* deletePlan({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `plans/${id}`);

    toast.success('Plano deletado com sucesso');
  } catch (error) {
    toast.error('Falha: Plano não foi removido');
  }
}

export default all([
  takeLatest('@plan/GET_SUCCESS', getPlans),
  takeLatest('@plan/CREATE_REQUEST', createPlan),
  takeLatest('@plan/UPDATE_REQUEST', updatePlan),
  takeLatest('@plan/DELETE_REQUEST', deletePlan),
]);
