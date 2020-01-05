import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  margin: 30px;
  width: 65%;
  font-family: Roboto;
  margin: 45px auto 0;
`;

export const Content = styled.div`
  min-height: 100%;
  background: #fff;
  border-radius: 6px;

  form {
    header {
      display: flex;
      align-items: center;
      align-self: center;
      justify-content: space-between;

      width: 100%;
      margin-bottom: 20px;

      h1 {
        color: #333;
        font-size: 26px;
      }

      div {
        display: flex;
      }

      a,
      button {
        display: flex;
        align-items: center;

        min-width: 100px;
        padding: 8px 20px;
        margin: 5px 0 0;
        border: 0;
        border-radius: 4px;
        font-weight: bold;
        text-transform: uppercase;
        transition: all 1s ease;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;

    padding: 35px;
    border-radius: 6px;
    background: #fff;

    label {
      margin-bottom: 5px;
      color: #444;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  height: 64px;
  background: #eee;
  justify-content: space-between;
  color: #444;

  div {
    display: flex;
    justify-content: space-around;

    a {
      background: #ccc;
      padding: 10px 25px;
      height: 40px;
      font-size: 14px;
      color: #fff;
      border-radius: 4px;
      font-weight: bold;
      margin-right: 20px;
      cursor: pointer;
      transition: all 2s ease;

      &:hover {
        background: #ddd;
        transition: all 1s ease;
        padding: 10px 25px;
        height: 40px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        border-radius: 4px;
        font-weight: bold;
        box-shadow: 1px 1px 3px #ddd;
      }

      label {
        margin: 15px;
        align-items: center;
        cursor: pointer;
      }
    }

    button {
      background: #de3b3b;
      color: #fff;
      border: 0;
      padding: 10px 25px;
      height: 40px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      transition: all 2s ease;

      &:hover {
        background: #b6063a;
        color: #fff;
        border: 0;
        padding: 10px 25px;
        height: 40px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 4px;
        transition: all 1s ease;
      }

      label {
        margin: 15px;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;

export const ContentForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      height: 44px;
      margin: 0 0 20px;
      padding: 0 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      background: #fff;
      font-size: 16px;

      &::placeholder {
        color: #999;
      }

      &:disabled {
        background-color: '#ddd';
      }
    }

    &:not(:last-of-type) {
      margin-right: 20px;
    }

    input[id*='react-select'] {
      height: 30px;
      margin-bottom: unset;
    }
  }
`;
