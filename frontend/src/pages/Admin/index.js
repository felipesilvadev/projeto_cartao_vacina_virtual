import React, { useState } from 'react';

import Vacinas from '../../components/Vacinas';
import Enfermeiros from '../../components/Enfermeiros';

import { Container } from './styles';

export default function Admin() {
  const [component, setComponent] = useState('');

  return (
    <Container>
      <aside>
        <button value="enfermeiros" onClick={e => setComponent(e.target.value)}>Enfermeiros</button>
        <button value="vacinas" onClick={e => setComponent(e.target.value)}>Vacinas</button>
      </aside>

      {component === 'enfermeiros' ? <Enfermeiros /> : <Vacinas />}

    </Container>
  );
}
