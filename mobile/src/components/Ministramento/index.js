import React from 'react';

import { format } from 'date-fns';

import { 
  Container, 
  Left,
  Info,
  Vacina, 
  Data,
  Doses,  
  Right,
  Enfermeiro
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
        <Vacina>{data.vacina_info.nome}</Vacina>
        <Data>{format(new Date(data.data), 'dd/MM/yyyy')}</Data>
        <Doses>{'Dose: ' + data.dose + 'ª'}</Doses>
      </Info>

      <Right>
        <Enfermeiro>{data.enfermeiro_info.nome.split(' ', 1)}</Enfermeiro>
      </Right>
    </Container>
  );
}
