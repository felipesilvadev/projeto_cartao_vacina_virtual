import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import { Container, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <Icon name="user-circle" size={70} />
      <Title>Meu Perfil</Title>
    </Container>
  );
}
