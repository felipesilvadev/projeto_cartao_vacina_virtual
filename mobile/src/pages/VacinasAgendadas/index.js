import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Agendamentos from '../../components/Agendamentos';

import { Container, Title, List } from './styles';

export default function VacinasAgendadas() {
  const [refreshing, setRefreshing] = useState(false);
  const [agendamentos, setAgendamentos] = useState([]);

  async function loadAgendamentos() {
    const response = await api.get('/agendamentos');

    setAgendamentos(response.data);
    setRefreshing(false);
  }

  useEffect(() => {    
    loadAgendamentos();
  }, []);

  function refreshList() {
    setRefreshing(true);
    loadAgendamentos();
  };

  return (
    <Container>
      <Title>Agendamentos</Title>

      <List 
        data={agendamentos}
        onRefresh={refreshList}
        refreshing={refreshing}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Agendamentos data={item} />
        )}
      />
    </Container>
  );
}
