import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';
import Logo from '~/assets/images/logo-vertical.png';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  async function handleSubmit() {
    dispatch(signInRequest(id));

    await AsyncStorage.setItem('id', id);
  }

  return (
    <Container>
      <Image source={Logo} />

      <Form>
        <FormInput
          secureTextEntry
          placeholder="Informe seu ID de cadastro"
          value={id}
          onChangeText={setId}
        />

        <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}

SignIn.navigationOptions = {
  tabBarVisible: false,
};
