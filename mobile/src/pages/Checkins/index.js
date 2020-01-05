import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatDistance, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale';

import api from '~/services/api';
import {
  createCheckInRequest,
  getCheckInsRequest,
} from '~/store/modules/checkIn/actions';

import {
  Container,
  Answers,
  HeaderAnswers,
  TextBold,
  TextDate,
  AnswersList,
  SubmitButton,
} from './styles';

export default function CheckIns() {
  const dispatch = useDispatch();

  const [checkIns, setCheckIns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadCheckIns() {
      setIsLoading(true);

      const id = await AsyncStorage.getItem('id');

      const response = await api.get(`students/${parseInt(id, 10)}/checkins`);

      const data = response.data.map(checkIn => ({
        ...checkIn,
      }));

      setCheckIns(data);
    }

    loadCheckIns();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    dispatch(getCheckInsRequest());
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(false);
  }, [checkIns]);

  async function handleCreate() {
    const student_id = await AsyncStorage.getItem('id');
    dispatch(createCheckInRequest(student_id));
  }

  function renderFooter() {
    if (!isLoading) return null;
    return (
      <View>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  return (
    <Container>
      <SubmitButton onPress={handleCreate}>Novo check-in</SubmitButton>

      <AnswersList
        data={checkIns}
        keyExtractor={checkIn => String(checkIn.id)}
        renderItem={({ item: checkIn, index }) => (
          <Answers key={checkIn.id}>
            <HeaderAnswers>
              <TextBold>Check-in #{index + 1}</TextBold>

              <TextDate>
                {formatDistance(new Date(), parseISO(checkIn.created_at), {
                  locale: ptBR,
                })}
              </TextDate>
            </HeaderAnswers>
          </Answers>
        )}
        ListFooterComponent={() => renderFooter()}
      />
    </Container>
  );
}

CheckIns.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="room" size={20} color={tintColor} />
  ),
};
