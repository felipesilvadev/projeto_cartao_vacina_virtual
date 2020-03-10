import styled from 'styled-components/native';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

export const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)``;

export const SubmitButton = styled(Button)``;

export const LogoutButton = styled(Button)`
  margin-top: 20px;
  background: #f64c75;
`;

export const Separator = styled.View`
  height: 1px;
  background: #666;
  margin: 20px 0 30px;
`;

