import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  height: 100%;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    column-gap: 0;
    row-gap: 20px;
    height: initial;
  }
`;
