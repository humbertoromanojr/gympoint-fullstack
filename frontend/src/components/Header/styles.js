import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import colors from '~/styles/colors';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: 1px solid #ddd;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      margin-left: -20px;
    }

    a {
      font-weight: bold;
      color: ${props => (props.active ? '#333' : '#999')};
      margin-left: 20px;
      cursor: pointer;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  text-align: right;

  strong {
    display: block;
    color: #333;
  }

  button {
    display: block;
    margin-top: 2px;
    font-size: 12px;
    color: #ee4d63;
    font-weight: bold;
    cursor: pointer;
    border: 0;
    background: #fff;
  }
`;

export const ActiveLink = styled(NavLink).attrs(props => ({}))`
  font-weight: bold;
  color: ${colors.normalLink};
`;
