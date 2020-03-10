import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signUpRequest } from '../../store/modules/auth/actions';

import { Container, Form, Title, Input, ButtonSubmit, SignLink } from './styles';

export default function Cadastro() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ nome, coren, email, password }) {
    dispatch(signUpRequest(nome, coren, email, password));
  }

  return (
    <Container>
      <Title>Cadastre-se</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="nome" placeholder="Informe o seu Nome"/>
        <Input name="coren" placeholder="Informe o seu COREN"/>
        <Input name="email" type="email" placeholder="Informe o seu email"/>
        <Input name="password" type="password" placeholder="Informe a sua senha"/>
        <ButtonSubmit>{ loading ? 'Loading...' : 'Enviar'}</ButtonSubmit>

        <SignLink to="/">Já tenho conta</SignLink>
      </Form>
    </Container>
  );
}
