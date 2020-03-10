import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { nome, email, ...rest } = payload.data;

    const profile = Object.assign(
      { nome, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro na atualização do perfil, tente novamente');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
