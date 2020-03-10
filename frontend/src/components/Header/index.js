import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MdPerson } from 'react-icons/md';
import logo from '../../assets/images/seringa.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="CVV"/>
          <Link to="/main">CVV</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.nome}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <MdPerson size={35} color="#FFF"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
