import React from 'react';

import { format } from 'date-fns';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import { 
  Container, 
  Left,
  Info,
  Vacina, 
  Dose, 
  Enfermeiro, 
  Data 
} from './styles';

export default function Agendamentos({ data }) {
  return (
    <Container past={data.status}>
      <Left>
        <Icon name="calendar-o" size={30} color="#0047ab" />
        <Data>{format(new Date(data.data), 'dd/MM/yyyy')}</Data>
      </Left>

      <Info>
        <Vacina>{data.vacina_info.nome}</Vacina>
        <Dose>{'Dose: ' + data.dose + 'ª'}</Dose>
      </Info>

      <Enfermeiro>{data.enfermeiro_info.nome.split(' ', 1)}</Enfermeiro>
    </Container>
  );
}
