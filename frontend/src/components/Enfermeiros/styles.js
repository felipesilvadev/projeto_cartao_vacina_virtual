import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  padding: 30px 40px;
  margin: 0 25px;
  background: #fff;
  border: 0;
  border-radius: 5px;
  box-shadow: 10px 10px 20px #999;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const List = styled.table`
  thead th {
    color: #999;
    text-align: left;
    padding: 0px 50px;
  }

  tbody td {
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
  }

  strong {
    color: #333;
    display: block;
  }

  button {
    background: #0047ab;
    border-radius: 4px;
    border: 0;
    padding: 6px;
    color: #fff;
    font-weight: bold;

    &:hover {
      background: ${darken(0.04, '#0047ab')};
    }
  }
`;
