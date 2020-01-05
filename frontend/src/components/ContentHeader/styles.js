import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 64px;
  background: #eee;
  justify-content: space-between;
  color: #444;
  font-family: Roboto, sans-serif;

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
        background: #afa7a7;
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
      transition: all 2s ease;

      &:hover {
        background: #b6063a;
        color: #fff;
        border: 0;
        padding: 10px 25px;
        height: 40px;
        font-size: 14px;
        font-weight: bold;
        border-radius: 4px;
        transition: all 1s ease;
      }

      label {
        margin: 15px;
        align-items: center;
        cursor: pointer;
      }

    }
`;
