import { Platform } from 'react-native';
import styled from 'styled-components';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #e6f0ff;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 30px 30px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
`;

export const FormTitle = styled.Text`
  align-self: center;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FormInput = styled(Input)``;

export const ButtonSubmit = styled(Button)``;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignLinkText = styled.Text`
  color: #666;
  font-weight: bold;
  font-size: 16px;
`;
