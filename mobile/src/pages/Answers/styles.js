import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #eee;
`;

export const PanelList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 },
})``;

export const Panel = styled.View`
  margin-top: 20px;
  border: 1px solid #999;
  border-radius: 4px;
  background: #fff;
  padding: 15px;
`;

export const PanelHeader = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PanelTextBold = styled.Text`
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #444;
`;

export const PanelTextDate = styled.Text`
  font-size: 14px;
  text-align: right;
  text-transform: capitalize;
  color: #666;
`;

export const PanelTextContent = styled.Text`
  font-size: 14px;
  font-size: 14px;
  color: #666;
  line-height: 26px;
  text-align: left;
  margin-bottom: 20px;
`;

export const Loading = styled.View`
  justify-content: center;
  align-items: center;
`;
