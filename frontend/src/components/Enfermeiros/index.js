import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Title, List } from './styles';

export default function Enfermeiros() {
  const [enfermeiros, setEnfermeiros] = useState([]);

  useEffect(async () => {
    const response = await api.get(`/users`);

    setEnfermeiros(response.data);
  }, []);


  async function handleAuth(id) {
    const remove = await api.put(`/auth/${id}`);

    toast.success('Autorizado com sucesso!');

    const enf = remove.data.id;
    setEnfermeiros(enfermeiros.filter((enfermeiro) => enfermeiro.id !== enf));
  }

  return (
    <Container>
      <Title>Autorizações Pendentes</Title>

      <List>
        <thead>
          <tr>
            <th>NOME</th>
            <th>COREN</th>
            <th>EMAIL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {enfermeiros.map(enfermeiro => (
            <tr>
              <td>
                <strong>{enfermeiro.nome}</strong>
              </td>
              <td>
                <strong>{enfermeiro.coren}</strong>
              </td>
              <td>
                <strong>{enfermeiro.email}</strong>
              </td>
              <td>
                <button onClick={() => handleAuth(enfermeiro.id)} type="button">
                  Autorizar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </List>

    </Container>
  );
}
