import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #fff;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled.TextInput`
  margin-top: 10px;
  padding-left: 10px;
  color: #999;
  font-size: 16px;
  background: #fff;
  border: 1px solid #ddd;
`;

export const SubmitButton = styled(Button)`
  margin-top: 25px;
  width: 100%;
`;
