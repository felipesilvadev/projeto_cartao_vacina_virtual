import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import { Container, Form, Separator, FormInput, SubmitButton, LogoutButton } from './styles';

import Header from '../../components/Header';

export default function PerfilPaciente() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [nome, setNome] = useState(profile.nome);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(updateProfileRequest({
      nome,
      email,
      oldPassword,
      password,
      confirmPassword
    }));
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header />
      <Form>
        <FormInput
          icon="user"
          autoCorrect={false}
          placeholder="Nome Completo"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={nome}
          onChangeText={setNome}
        />
        <FormInput
          icon="envelope-o"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe o seu e-mail"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          ref={emailRef}
          value={email}
          onChangeText={setEmail}
        />

        <Separator />

        <FormInput
          icon="lock"
          placeholder="Informe a sua senha antiga"
          returnKeyType="next"
          secureTextEntry
          onSubmitEditing={() => passwordRef.current.focus()}
          value={oldPassword}
          onChangeText={setOldPassword}
        />
        <FormInput
          icon="lock"
          placeholder="Informe a sua nova senha"
          returnKeyType="next"
          secureTextEntry
          ref={passwordRef}
          onSubmitEditing={() => passwordConfirmRef.current.focus()}
          value={password}
          onChangeText={setPassword}
        />
        <FormInput
          icon="lock"
          placeholder="Informe a sua nova senha novamente"
          returnKeyType="send"
          secureTextEntry
          ref={passwordConfirmRef}
          onSubmitEditing={handleSubmit}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        
        <SubmitButton onPress={handleSubmit}>Atualizar</SubmitButton>
        <LogoutButton onPress={handleLogout}>Sair</LogoutButton>
      </Form>
    </Container>
  );
}
