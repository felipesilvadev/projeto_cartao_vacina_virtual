import React from 'react';

import { 
  Container, 
  Left,
  Info,
  Vacina, 
  Descricao,
  Doses,  
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default function Vacinas({ data }) {
  return (
    <Container>
      <Left>
        <Icon name="tint" size={35} color="#0047ab" />
      </Left>
      
      <Info>
        <Vacina>{data.nome}</Vacina>
        <Descricao>{data.descricao}</Descricao>
        <Doses>{data.doses + 'ª dose'}</Doses>
      </Info>

    </Container>
  );
}
