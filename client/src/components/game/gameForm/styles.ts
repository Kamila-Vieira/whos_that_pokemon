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
    margin-bottom: 60px;
  }
`;

export const GameResults = styled.div`
  .form-attempts-content {
    margin-bottom: 10px;
  }

  h5 {
    margin-bottom: 20px;
    color: #ff0000;
  }
`;

export const CharacteristicsTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #cccccc;
    text-align: left;
    padding: 8px;
    width: 50%;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
