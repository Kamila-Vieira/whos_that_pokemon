import styled from "styled-components";

export const Container = styled.div`
  margin: 60px 0;
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
