import styled from "styled-components";

export const Container = styled.div`
  margin-top: 110px;
  .pokemonsList-list {
    display: grid;
    column-gap: 12px;
    row-gap: 12px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
