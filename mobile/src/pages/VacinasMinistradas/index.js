import React, { useState, useEffect } from 'react';
import { DefaultTheme, Button, Menu, Provider } from 'react-native-paper';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

import { Container, Header, Title, List } from './styles';

import Vacinas from '../../components/Ministramento';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    accent: '#0047ab'
  },
};

export default function CalendarioVacinas() {
  const [refreshing, setRefreshing] = useState(false);
  const [visible, setVisible] = useState(false);
  const [ministramentos, setMinistramentos] = useState([]);

  _openMenu = () => setVisible(true);
  _closeMenu = () => setVisible(false);

  async function loadMinistramentos(faixa) {
    _closeMenu();
    const response = await api.get(`/ministramentos/${faixa}`);

    setMinistramentos(response.data);
  }

  function refreshList() {
    setRefreshing(true);
    loadInit();
  };

  async function loadInit() {
    const response = await api.get(`/ministramentos`);

    setMinistramentos(response.data);
    setRefreshing(false);
  }

  useEffect(() => {
    loadInit();
  }, []);

  return (
    <Container>
      <Provider theme={theme}>
        <Header>
          <Title>Administradas</Title>
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
            <Menu.Item onPress={() => {loadMinistramentos('crianca')}} title="Criança" />
            <Menu.Item onPress={() => {loadMinistramentos('adolescente')}} title="Adolescente" />
            <Menu.Item onPress={() => {loadMinistramentos('adulto')}} title="Adulto" />
            <Menu.Item onPress={() => {loadMinistramentos('gestante')}} title="Gestante" />
            <Menu.Item onPress={() => {loadMinistramentos('idoso')}} title="Idoso" />
          </Menu>
        </Header>

        <List 
          data={ministramentos}
          onRefresh={refreshList}
          refreshing={refreshing}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Vacinas data={item} />
          )}
        />
      </Provider>
    </Container>
  );
}
