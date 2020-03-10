import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 30px auto;
  display: flex;
  flex-direction: row;

  aside {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      border: 0;
      background: none;
      color: #666;
      margin: 10px 0;
    }

    button:hover {
      color: ${darken(0.4, '#666')};
    }
  }
`;
