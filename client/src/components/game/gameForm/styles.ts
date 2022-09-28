import styled from "styled-components";

export const FormContainer = styled.form<{ isLoading?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  .game-form-text {
    margin-bottom: 10px;
  }
  .game-form-content {
    display: flex;
    align-items: center;
  }
`;

export const ErrorMessage = styled.strong`
  margin-top: 10px;
  color: #ff0000;
`;
