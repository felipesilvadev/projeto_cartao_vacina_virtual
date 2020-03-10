import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 4px;
  background: #eee;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Left = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

export const Vacina = styled.Text`
  font-weight: bold;
  font-size: 26px;
`;

export const Data = styled.Text`
  max-width: 250px;
`;

export const Doses = styled.Text`
  color: #666;
`;

export const Right = styled.View``;

export const Enfermeiro = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;






