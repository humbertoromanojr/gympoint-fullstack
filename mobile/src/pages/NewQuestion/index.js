import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { createNewQuestionRequest } from '../../store/modules/newquestion/actions';

import { Container, FormInput, SubmitButton } from './styles';

export default function NewQuestion({ navigation }) {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState('');

  async function handleCreate() {
    const student_id = await AsyncStorage.getItem('id');
    dispatch(createNewQuestionRequest(student_id, question));

    if (question) navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <FormInput
        multiline
        underlineColorAndroid="transparent"
        textAlignVertical="top"
        placeholder="Inclua seu pedido de auxílio"
        placeholderTextColor="#999"
        autoCorrect
        keyboardType="default"
        returnKeyType="send"
        value={question}
        onChangeText={setQuestion}
      />
      <SubmitButton onPress={handleCreate}>Enviar pedido</SubmitButton>
    </Container>
  );
}
