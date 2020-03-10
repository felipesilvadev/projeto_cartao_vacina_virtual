import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 40px;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 }
})``;
