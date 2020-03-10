import React, { useState } from 'react';

import api from '../../services/api';

import { toast } from 'react-toastify';

import { Container, Form, Input } from './styles';

export default function Vacinas() {
  const [vacina, setVacina] = useState();
  const [descricao, setDescricao] = useState();
  const [faixa, setFaixa] = useState();
  const [doses, setDoses] = useState(0);


  async function handleSubmit() {
    await api.post(`/vacinas`, {
      nome: vacina,
      descricao: descricao,
      faixa: faixa,
      doses: doses
    });

    toast.success('Vacina cadastrada com sucesso!');

    setVacina('');
    setDescricao('');
    setDoses(0);
  }

  return (
    <Container>
      <h1>Cadastrar Vacina</h1>

      <Form onSubmit={handleSubmit}>
        <span>Nome</span>
        <Input name="vacina" value={vacina} onChange={e => setVacina(e.target.value)} />

        <span>Descrição</span>
        <Input name="data" value={descricao} onChange={e => setDescricao(e.target.value)} />

        <div>
          <span>Faixa:</span>
          <select onChange={e => setFaixa(e.target.value)}>
            <option value="crianca">Criança</option>
            <option value='adolescente'>Adolescente</option>
            <option value='adulto'>Adulto</option>
            <option value='gestante'>Gestante</option>
            <option value='idoso'>Idoso</option>
          </select>
        </div>
        <div>
          <span>Doses:</span>
          <input type="number" name="doses" placeholder="Doses" onChange={e => setDoses(e.target.value)} value={doses}/>
        </div>

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
