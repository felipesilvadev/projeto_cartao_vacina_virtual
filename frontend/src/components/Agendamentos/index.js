import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { parse } from 'date-fns';

import api from '../../services/api';

import { MdSearch } from 'react-icons/md';

import { toast } from 'react-toastify';

import { Container, Header, Form, Input } from './styles';

export default function Agendamentos() {
  const enfermeiro = useSelector(state => state.user.profile);

  const [cns, setCns] = useState('');
  const [paciente, setPaciente] = useState('');
  const [data, setData] = useState('');
  const [vacina, setVacina] = useState();
  const [dose, setDose] = useState(0);

  const [vacinas, setVacinas] = useState([]);

  async function handlePaciente(cns) {
    const response = await api.get(`/users/${cns}`);

    const { nome } = response.data;

    setPaciente(nome);
  }

  async function loadVacinas(faixa) {
    const response = await api.get(`/vacinas/${faixa}`);

    setVacinas(response.data);
  }

  async function handleSubmit({ data }) {
    const date = parse(data, 'dd/MM/yyyy', new Date());

    await api.post(`/agendamentos`, {
      data: date,
      enfermeiro: enfermeiro.id,
      paciente: cns,
      vacina: vacina,
      dose: dose
    });

    toast.success('Agendamento Concluído!');

    setCns('');
    setPaciente('');
    setData('');
    setDose(0);
  }

  return (
    <Container>
      <h1>Agendar Vacina</h1>
      <Header>
        <Input name="cns" onChange={e => setCns(e.target.value)} value={cns} placeholder="CNS do paciente"/>
        <button onClick={() => handlePaciente(cns)}><MdSearch size={25} color="#FFF"/></button>
      </Header>

      <Form onSubmit={handleSubmit}>
        <span>Paciente</span>
        <Input name="nome" value={paciente} placeholder="Paciente" disabled />

        <span>Data</span>
        <Input name="data" value={data} onChange={e => setData(e.target.value)} />

        <span>Vacina</span>
        <div>
          <select onChange={e => loadVacinas(e.target.value)}>
            <option value="crianca">Criança</option>
            <option value='adolescente'>Adolescente</option>
            <option value='adulto'>Adulto</option>
            <option value='gestante'>Gestante</option>
            <option value='idoso'>Idoso</option>
          </select>

          <select name="vacina" onChange={e => setVacina(e.target.value)}>
            {vacinas.map(vacina => (
              <option value={vacina.nome}>{vacina.nome}</option>
            ))}
          </select>

          <input type="number" name="dose" placeholder="Dose" onChange={e => setDose(e.target.value)} value={dose}/>
        </div>

        <button type="submit">Agendar</button>
      </Form>
    </Container>
  );
}
