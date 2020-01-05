import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  width: ${props => (props.size === 'big' ? 600 : 400)}px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  > p {
    margin-bottom: 20px;
    color: #666;
    font-size: 16px;
    text-align: left;
  }

  > button {
    width: 100%;
    height: 44px;
    padding: 0 10px;
    margin-top: 20px;
    border: 0;
    border-radius: 3px;
    color: #fff;
    background: #f64c75;
    font-size: 18px;
    font-weight: 700;
    transition: background-color 0.15 ease;
    cursor: pointer;

    &:hover {
      width: 100%;
      height: 44px;
      padding: 0 10px;
      margin-top: 20px;
      border: 0;
      border-radius: 3px;
      color: #fff;
      background: #ee4d63;
      font-size: 18px;
      font-weight: 700;
      transition: background-color 0.15 ease;
      cursor: pointer;
    }
  }

  > button + button {
    /* height: 28px;
    padding: 0 10px;
    margin-top: 10px; */
    border: 0;
    border-radius: 3px;
    color: #666;
    background: #b9bbbe;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color 0.15 ease;

    &:hover {
      background: #999;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    > label {
      margin-bottom: 5px;
      color: #444;
      font-size: 14px;
      font-weight: bold;
      text-align: left;
      text-transform: uppercase;
    }

    > p {
      margin-bottom: 20px;
      color: #666;
      font-size: 16px;
      text-align: left;
    }

    > span {
      align-self: flex-start;
      margin: 5px 0 0px;
      color: #fb6f91;
      font-weight: bold;
    }

    > input,
    > textarea {
      width: 100%;
      height: 44px;
      margin: 0 0 20px;
      padding: 0 15px;
      border: 1px solid #bbb;
      border-radius: 4px;
      color: #666;
      background: #fff;
      font-size: 16px;

      &:focus {
        border-color: #f64c75;
      }
    }

    > textarea {
      height: 120px;
      padding: 10px 15px;
      resize: none;
    }

    > button {
      height: 44px;
      padding: 0 10px;
      margin-top: 20px;
      border: 0;
      border-radius: 3px;
      color: #fff;
      background: #f64c75;
      font-size: 18px;
      font-weight: 700;
      transition: background-color 0.15 ease;
      cursor: pointer;

      &:hover {
        height: 44px;
        padding: 0 10px;
        margin-top: 20px;
        border: 0;
        border-radius: 3px;
        color: #fff;
        background: #f64c75;
        font-size: 18px;
        font-weight: 700;
        transition: all 0.15 ease;
        cursor: pointer;
      }
    }

    > button + button,
    > button[type='button'] {
      height: 28px;
      padding: 0 10px;
      margin-top: 20px;
      border: 0;
      border-radius: 3px;
      color: #666;
      background: #b9bbbe;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      transition: all 0.15 ease;

      &:hover {
        background: #999;
      }
    }

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      button {
      height: 24px;
      width: 24px;
      margin-top: 20px;
      border: 1px solid #f64c75;
      border-radius: 3px;
      color: #fff;
      background: #f64c75;
      font-size: 18px;
      font-weight: 700;
      justify-content: center;
      align-items: center;
      transition: all 0.15 ease;
      cursor: pointer;

      &:hover {
        height: 24px;
        width: 24px;
        margin-top: 20px;
        border: 1px solid #f64c75;
        border-radius: 3px;
        color: #fff;
        background: #f64c75;
        font-size: 18px;
        font-weight: 700;
        justify-content: center;
        align-items: center;
        transition: all 0.15 ease;
        cursor: pointer;
      }
    }
  }
`;
