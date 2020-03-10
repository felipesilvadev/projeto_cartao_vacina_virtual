import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Form, Title, Input, ButtonSubmit, SignLink } from './styles';

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Title>Bem Vindo</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Informe o seu email"/>
        <Input name="password" type="password" placeholder="Informe a sua senha"/>
        <ButtonSubmit>{ loading ? 'Loading...' : 'Entrar'}</ButtonSubmit>

        <SignLink to="/cadastro">Criar nova conta</SignLink>
      </Form>
    </Container>
  );
}
