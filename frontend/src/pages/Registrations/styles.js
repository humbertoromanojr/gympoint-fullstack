import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px;
  font-family: Roboto;
  max-width: 97%;
  margin: 45px auto 0;

  section {
    padding: 35px;
    border-radius: 6px;
    background: #fff;

    a {
      margin: 20px;
      color: #333;
      font-size: 16px;
      text-align: right;
      transition: all 2s ease;

      &:hover {
        margin: 20px;
        color: #666;
        font-size: 16px;
        text-align: right;
        transition: all 1s ease;
      }
    }

    button {
      background: none;
      color: #de3b3b;
      border: 0;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background: none;
        color: #b6063a;
        border: 0;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 6px;
`;

export const Header = styled.div`
  display: flex;
  height: 64px;
  background: #eee;
  justify-content: space-between;
  color: #444;

  a {
    background: #ee4d64;
    padding: 10px 25px;
    height: 40px;
    color: #fff;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    transition: all 2s ease;

    &:hover {
      background: #b6063a;
      transition: all 1s ease;
      padding: 10px 25px;
      height: 40px;
      color: #fff;
      cursor: pointer;
      border-radius: 4px;
      font-weight: bold;
      box-shadow: 3px 3px 13px #666;
    }
  }

  label {
    margin-left: 15px;
    cursor: pointer;
  }
`;
