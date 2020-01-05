import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { getRegistrationsSuccess } from './actions';

export function* getRegistrations() {
  try {
    const response = yield call(api.get, `registrations`);

    const data = response.data.map(registration => ({
      ...registration,
    }));

    yield put(getRegistrationsSuccess(data));
  } catch (error) {
    toast.error('Falha: Problemas na listagens das matrículas');
  }
}

export function* createRegistration({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'registrations', data);

    toast.success('Matrícula criada com sucesso');
    history.push('/registrations');
  } catch (error) {
    toast.error('Falha: Matrícula não foi criada');
  }
}

export function* updateRegistration({ payload }) {
  try {
    const { id, data } = payload;

    yield call(api.put, `registrations/${id}`, data);

    toast.success('Matrícula atualizada com sucesso');
  } catch (error) {
    toast.error('Falha: Matrícula não foi atualizada');
  }
}

export function* deleteRegistration({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `registrations/${id}`);

    toast.success('Matrícula deletada com sucesso');
  } catch (error) {
    toast.error('Falha: Matrícula não foi deletada de nosso banco de dados.');
  }
}

export default all([
  takeLatest('@registration/GET_REQUEST', getRegistrations),
  takeLatest('@registration/DELETE_REQUEST', deleteRegistration),
  takeLatest('@registration/UPDATE_REQUEST', updateRegistration),
  takeLatest('@registration/CREATE_REQUEST', createRegistration),
]);
