import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <h1>Meu Perfil</h1>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Nome completo"/>
        <Input name="email" type="email" placeholder="Informe o seu email"/>

        <hr />

        <Input name="oldPassword" type="password" placeholder="Informe a sua senha atual"/>
        <Input name="password" type="password" placeholder="Informe a nova senha"/>
        <Input name="confirmPassword" type="password" placeholder="Confirme a sua nova senha"/>

        <button type="submit">Atualizar</button>
      </Form>

      <button type="button" onClick={handleSignOut}>Sair</button>
    </Container>
  );
}
