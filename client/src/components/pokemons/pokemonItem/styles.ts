import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #ffffff;
  border: 1px solid red;
  border-radius: 8px;
  height: 32px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  transition: all 0.5s;
  &:hover {
    opacity: 0.6;
  }
`;

export const Container = styled.div`
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  width: 100%;
  transition: all 0.3s ease-out;
  .pokemon-card-data {
    .pokemon-field {
      &.name-field {
        width: 100%;
        & > input {
          display: flex;
          font-weight: bold;
          text-align: center;
          font-size: 16px;
          margin-bottom: 20px;
          border-bottom: 1px solid #000;
          padding-bottom: 10px;
        }
      }
      & input {
        text-transform: capitalize;
        width: 100%;
        background-color: transparent;
        border: none;
        font-size: 14px;
        padding: 5px 0;
        margin: 5px 0;
        border-bottom: 1px solid transparent;
        &:not(:disabled) {
          border-color: #000;
        }
      }
    }
  }
`;

export const ButtonsContent = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const ButtonEdit = styled.button`
  ${buttonStyles}
`;

export const ButtonRemove = styled.button`
  ${buttonStyles}
`;

export const ErrorMessage = styled.strong`
  text-transform: capitalize;
  border: none;
  font-size: 12px;
  padding: 5px 0;
  color: red;
`;
