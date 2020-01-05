import styled from 'styled-components';

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
    }
  }
`;

export const ContentForm = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    &:not(:last-of-type) {
      margin-right: 20px;
    }

    &:disabled {
      background: #ddd;
    }
  }
`;
