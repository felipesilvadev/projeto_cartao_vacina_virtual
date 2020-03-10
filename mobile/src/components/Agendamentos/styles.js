import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #eee;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 1 : 0.6)};
`;

export const Left = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Data = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  color: #0047ab;
`;

export const Info = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Vacina = styled.Text`
  font-weight: bold;
  font-size: 26px;
`;

export const Dose = styled.Text`
  color: #666;
`;

export const Enfermeiro = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;



