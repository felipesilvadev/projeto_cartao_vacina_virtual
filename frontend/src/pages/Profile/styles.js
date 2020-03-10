import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px 20px;
  background: #fff;
  border: 0;
  border-radius: 5px;
  box-shadow: 10px 10px 20px #999;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #666;
      margin: 0 0 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.2);
      margin: 10px 0 20px;
    }

    button {
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
    }
  }

  > button {
    width: 100%;
    margin: 5px 0 0;
    border: 0;
    border-radius: 4px;
    height: 44px;
    font-size: 16px;
    background: #F64C75;
    font-weight: bold;
    color: #FFF;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#F64C75')};
    }
  }
`;
