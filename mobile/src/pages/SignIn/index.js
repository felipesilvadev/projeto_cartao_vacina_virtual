import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { signInRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormTitle,
  FormInput,
  ButtonSubmit,
  SignLink,
  SignLinkText,
} from './styles';

Icon.loadFont();

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Form>
        <FormTitle>Bem-vindo</FormTitle>
        <FormInput
          icon="envelope-o"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe o seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          icon="lock"
          secureTextEntry
          placeholder="Informe a sua Senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        <ButtonSubmit loading={loading} onPress={handleSubmit}>ENTRAR</ButtonSubmit>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignUp')}>
        <SignLinkText>Criar nova conta</SignLinkText>
      </SignLink>
    </Container>
  );
}
