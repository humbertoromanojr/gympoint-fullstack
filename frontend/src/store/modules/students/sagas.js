import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { getStudentsSuccess } from './actions';

export function* getStudents({ payload }) {
  try {
    const { search } = payload;

    const response = yield call(api.get, `students?q=${search}`);

    yield put(getStudentsSuccess(response.data));
  } catch (error) {
    toast.error('Problemas na listagens dos alunos');
  }
}

export function* createStudent({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, `students`, data);

    toast.success('Aluno criado com sucesso');
  } catch (error) {
    toast.error('Falha: Aluno não foi criado');
  }
}

export function* updateStudent({ payload }) {
  try {
    const { id, data } = payload;

    yield call(api.put, `students/${id}`, data);

    toast.success('Aluno atualizado com sucesso');
  } catch (error) {
    toast.error('Falha: Aluno não foi atualizado');
  }
}

export function* deleteStudent({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `students/${id}`);

    toast.success('Aluno deletado com sucesso');
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha: Aluno não foi removido');
  }
}

export default all([
  takeLatest('@student/GET_REQUEST', getStudents),
  takeLatest('@student/DELETE_REQUEST', deleteStudent),
  takeLatest('@student/UPDATE_REQUEST', updateStudent),
  takeLatest('@student/CREATE_REQUEST', createStudent),
]);
