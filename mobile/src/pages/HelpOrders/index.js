import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Touchable from 'react-native-platform-touchable';

import { parseISO, formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale';
import api from '~/services/api';

import { getHelpOrdersRequest } from '~/store/modules/helpOrder/actions';

import {
  Container,
  Question,
  HeaderQuestion,
  QuestionTextBold,
  QuestionTextDate,
  QuestionTextContent,
  QuestionsList,
  Loading,
  QuestionOk,
  QuestionNoResponde,
  SubmitButton,
} from './styles';

export default function HelpOrders({ navigation }) {
  const dispatch = useDispatch();

  const [helpOrders, setHelpOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function loadHelpOrders() {
      const id = await AsyncStorage.getItem('id');

      const response = await api.get(
        `students/${parseInt(id, 10)}/help-orders`
      );

      const data = response.data.map(helpOrder => ({
        ...helpOrder,
      }));

      setHelpOrders(data);
    }

    loadHelpOrders();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    dispatch(getHelpOrdersRequest());
  }, [dispatch]);

  function renderFooter() {
    if (!isLoading) return null;
    return (
      <Loading>
        <ActivityIndicator size="small" />
      </Loading>
    );
  }

  return (
    <Container>
      <SubmitButton
        onPress={() => {
          navigation.navigate('NewQuestion');
        }}>
        Novo pedido de auxílio
      </SubmitButton>

      <QuestionsList
        data={helpOrders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: helpOrder }) => (
          <>
            <Touchable
              onPress={() => {
                navigation.navigate('Answers', {
                  itemId: helpOrder.id,
                });
              }}
              background={Touchable.Ripple('#42cb59')}>
              <Question key={helpOrder.id}>
                <HeaderQuestion>
                  <QuestionTextBold>
                    {helpOrder.answer ? (
                      <QuestionOk>
                        <Icon name="check-circle" size={16} color="#42cb59" />
                        {'  '}Respondido
                      </QuestionOk>
                    ) : (
                      <QuestionNoResponde>
                        <Icon name="check-circle" size={16} color="#999" />
                        {'  '}Sem resposta
                      </QuestionNoResponde>
                    )}
                  </QuestionTextBold>
                  <QuestionTextDate>
                    {formatDistance(
                      new Date(),
                      parseISO(helpOrder.created_at),
                      {
                        locale: ptBR,
                      }
                    )}
                  </QuestionTextDate>
                </HeaderQuestion>
                <QuestionTextContent>
                  {helpOrder.question.length < 82
                    ? `${helpOrder.question}`
                    : `${helpOrder.question.substring(0, 80)}...`}
                </QuestionTextContent>
              </Question>
            </Touchable>
          </>
        )}
        ListFooterComponent={() => renderFooter()}
      />
    </Container>
  );
}

HelpOrders.navigationOptions = {
  tabBarLabel: 'Pedir Ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help" size={20} color={tintColor} />
  ),
};
