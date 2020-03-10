import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import { signUpRequest } from '../../store/modules/auth/actions';

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

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();
  const cnsRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [nome, setNome] = useState('');
  const [cns, setCns] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(nome, cns, email, password));

    setNome('');
    setCns('');
    setEmail('');
    setPassword('');
  }

  return (
    <Container>
      <Form>
        <FormTitle>Cadastre-se</FormTitle>
        <FormInput
          icon="user"
          autoCorrect={false}
          placeholder="Nome Completo"
          returnKeyType="next"
          onSubmitEditing={() => cnsRef.current.focus()}
          value={nome}
          onChangeText={setNome}
        />
        <FormInput
          icon="list-alt"
          keyboardType="number-pad"
          autoCorrect={false}
          placeholder="CNS (Cartão Nacional de Saúde)"
          returnKeyType="next"
          ref={cnsRef}
          onSubmitEditing={() => emailRef.current.focus()}
          value={cns}
          onChangeText={setCns}
        />
        <FormInput
          icon="envelope-o"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe o seu e-mail"
          returnKeyType="next"
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          icon="lock"
          placeholder="Informe a sua Senha"
          returnKeyType="send"
          secureTextEntry
          ref={passwordRef}
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />
        
        <ButtonSubmit loading={loading} onPress={handleSubmit}>ENVIAR</ButtonSubmit>
      </Form>

      <SignLink onPress={() => navigation.navigate('SignIn')}>
        <SignLinkText>Já tenho conta</SignLinkText>
      </SignLink>
    </Container>
  );
}
