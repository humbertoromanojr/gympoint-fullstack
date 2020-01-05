import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #eee;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 15px;
  width: 100%;
`;

export const HeaderAnswers = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextBold = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #222;
`;

export const TextDate = styled.Text`
  font-size: 14px;
  text-align: right;
  text-transform: capitalize;
  color: #666;
`;

export const Answers = styled.View`
  margin-top: 10px;
  border: 1px solid #999;
  border-radius: 4px;
  background: #fff;
  padding: 15px;
`;

export const AnswersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 },
})``;
