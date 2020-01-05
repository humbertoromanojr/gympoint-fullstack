import { Platform } from 'react-native';
import styled from 'styled-components';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  padding: 20px;
  background-color: #eee;
`;

export const FormInput = styled(Input)`
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #999;
  border-radius: 4px;
  background: #fff;
  height: 250px;
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  width: 100%;
`;
