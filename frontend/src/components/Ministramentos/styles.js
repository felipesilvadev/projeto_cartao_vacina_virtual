import { Form as RocketForm, Input as RocketInput } from '@rocketseat/unform';
import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 40px 40px;
  margin: 0 25px;
  background: #fff;
  border: 0;
  border-radius: 5px;
  box-shadow: 10px 10px 20px #999;

  h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    border: 0;
    border-radius: 4px;
    height: 35px;
    width: 35px;
    background: #0047ab;
    font-weight: bold;
    color: #FFF;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#0047ab')};
    }
  }
`;

export const Form = styled(RocketForm)`
  padding: 15px 0;
  display: flex;
  flex-direction: column;

  span {
    margin: 5px 0;
  }

  div {
    display: flex;
    justify-content: space-around;

    input {
      border: 2px solid #e6f0ff;
      border-radius: 4px;
      width: 60px;
      color: #666;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    border: 0;
    border-radius: 4px;
    height: 35px;
    background: #0047ab;
    font-weight: bold;
    color: #FFF;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#0047ab')};
    }
  }
`;

export const Input = styled(RocketInput)`
  border: 2px solid #e6f0ff;
  border-radius: 4px;
  height: 35px;
  padding: 0 15px;
  color: #666;
`;
