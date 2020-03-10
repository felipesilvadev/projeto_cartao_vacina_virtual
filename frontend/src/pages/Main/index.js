import React, { useState } from 'react';

import Agendamentos from '../../components/Agendamentos';
import Ministramentos from '../../components/Ministramentos';

import { Container } from './styles';

export default function Main() {
  const [component, setComponent] = useState('');

  return (
    <Container>
      <aside>
        <button value="ministramento" onClick={e => setComponent(e.target.value)}>Ministramentos</button>
        <button value="agendamento" onClick={e => setComponent(e.target.value)}>Agendamentos</button>
      </aside>

      {component === 'ministramento' ? <Ministramentos /> : <Agendamentos />}

    </Container>
  );
}
