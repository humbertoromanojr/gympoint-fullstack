import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 58%;
  margin: 50px auto 0;

  section {
    padding: 30px;
    border-radius: 3px;
    background-color: #fff;

    button {
      background: none;
      padding: 10px 25px;
      border: 0;
      font-family: Roboto-Regular;
      font-size: 15px;
      color: #4d85ee;
      text-align: right;
      cursor: pointer;
    }

    table {
      width: 100%;
      color: #666;
      border-collapse: collapse;

      thead {
        tr {
          margin-bottom: 20px;
        }

        th {
          font-size: 16px;
          font-weight: bold;
          color: #444;
          text-align: left;
          padding-bottom: 10px;
          text-transform: uppercase;
          border-bottom: 1px solid #fff;
        }
      }

      tbody,
      tr {
        td {
          padding: 12px 5px;
          border-bottom: 1px solid #dee2e6;

          &:last-of-type {
            text-align: right;
          }
        }

        &:first-of-type {
          td {
            border: 0;
          }
        }
      }
    }
  }
`;
