import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #eee;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const QuestionsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 },
})``;

export const Question = styled.View`
  margin-top: 10px;
  border: 1px solid #999;
  border-radius: 4px;
  background: #fff;
  padding: 15px;
`;

export const HeaderQuestion = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionTextBold = styled.Text`
  font-size: 14px;
  font-weight: bold;
  height: 22px;
  text-align: left;
  color: #999;
`;

export const QuestionTextDate = styled.Text`
  font-size: 14px;
  text-align: right;
  text-transform: capitalize;
  color: #666;
`;

export const QuestionTextContent = styled.Text`
  font-size: 14px;
  color: #666;
  line-height: 26px;
  text-align: left;
`;

export const QuestionOk = styled.Text`
  font-size: 14px;
  color: #42cb59;
`;

export const QuestionNoResponde = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const Loading = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 15px;
  width: 100%;
`;
