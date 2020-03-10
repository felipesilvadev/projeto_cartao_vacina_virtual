import React, { useState, useEffect } from 'react';
import { DefaultTheme, Button, Menu, Provider } from 'react-native-paper';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import { Container, Header, Title, List } from './styles';

import Vacinas from '../../components/Vacinas';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    accent: '#0047ab'
  },
};

export default function CalendarioVacinas() {
  const [visible, setVisible] = useState(false);
  const [vacinas, setVacinas] = useState([]);

  _openMenu = () => setVisible(true);
  _closeMenu = () => setVisible(false);

  async function loadVacinas(faixa) {
    _closeMenu();
    const response = await api.get(`/vacinas/${faixa}`);

    setVacinas(response.data);
  }

  useEffect(() => {
    async function loadInit() {
      const response = await api.get(`/vacinas/crianca`);

      setVacinas(response.data);
    }
    loadInit();
  }, []);

  return (
    <Container>
      <Provider theme={theme}>
        <Header>
          <Title>Vacinas</Title>
          <Menu
            visible={visible}
            onDismiss={_closeMenu}
            anchor={
              <Button style={{
                marginTop: 30,
              }}
              onPress={_openMenu}>
                <Icon name="filter" size={18}/>
                Filtro
              </Button>
            }
          >
            <Menu.Item onPress={() => {loadVacinas('crianca')}} title="Criança" />
            <Menu.Item onPress={() => {loadVacinas('adolescente')}} title="Adolescente" />
            <Menu.Item onPress={() => {loadVacinas('adulto')}} title="Adulto" />
            <Menu.Item onPress={() => {loadVacinas('gestante')}} title="Gestante" />
            <Menu.Item onPress={() => {loadVacinas('idoso')}} title="Idoso" />
          </Menu>
        </Header>

        <List 
          data={vacinas}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Vacinas data={item} />
          )}
        />
      </Provider>
    </Container>
  );
}
