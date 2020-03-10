import { Form as FormRocket, Input as InputRocket } from '@rocketseat/unform';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Form = styled(FormRocket)`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(InputRocket)`
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #666;
  margin: 0 0 10px;
`;

export const ButtonSubmit = styled.button`
  margin: 5px 0 0;
  border: 0;
  border-radius: 4px;
  height: 44px;
  font-size: 16px;
  background: #0047ab;
  font-weight: bold;
  color: #FFF;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.04, '#0047ab')};
  }
`;

export const SignLink = styled(Link)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #666;

  &:hover {
    color: ${darken(0.15, '#666')};
  }
`;
