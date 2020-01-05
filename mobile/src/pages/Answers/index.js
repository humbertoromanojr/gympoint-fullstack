import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatDistance, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/esm/locale';
import api from '~/services/api';

import { getHelpOrdersRequest } from '~/store/modules/helpOrder/actions';

import {
  Container,
  Panel,
  PanelHeader,
  PanelTextBold,
  PanelTextDate,
  PanelTextContent,
  PanelList,
  Loading,
} from './styles';

export default function Answers() {
  const dispatch = useDispatch();

  const [helpOrders, setHelpOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadHelpOrders() {
      setLoading(true);
      const studentId = await AsyncStorage.getItem('id');

      const response = await api.get(
        `students/${parseInt(studentId, 10)}/help-orders`
      );

      const data = response.data.map(helpOrder => ({
        ...helpOrder,
      }));

      setHelpOrders(data);
      setLoading(false);
    }

    loadHelpOrders();
  }, []);

  useEffect(() => {
    dispatch(getHelpOrdersRequest());
  }, [dispatch]);

  function renderFooter() {
    if (!loading) return null;
    return (
      <Loading>
        <ActivityIndicator size="small" />
      </Loading>
    );
  }

  return (
    <Container>
      <PanelList
        data={helpOrders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item: helpOrder }) =>
          helpOrder.answer ? (
            <Panel key={helpOrder.id}>
              <PanelHeader>
                <PanelTextBold>Pergunta</PanelTextBold>
                <PanelTextDate>
                  {formatDistance(new Date(), parseISO(helpOrder.created_at), {
                    locale: ptBR,
                  })}
                </PanelTextDate>
              </PanelHeader>
              <PanelTextContent>{helpOrder.question}</PanelTextContent>
              <PanelTextBold>Resposta</PanelTextBold>
              <PanelTextContent>
                {helpOrder.answer ? helpOrder.answer : null}
              </PanelTextContent>
            </Panel>
          ) : null
        }
        ListFooterComponent={() => renderFooter()}
      />
    </Container>
  );
}

Answers.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="help" size={20} color={tintColor} />
  ),
};
