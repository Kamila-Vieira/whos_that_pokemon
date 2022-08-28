import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  .pokemonsList-list {
    display: grid;
    column-gap: 12px;
    row-gap: 12px;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 460px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
