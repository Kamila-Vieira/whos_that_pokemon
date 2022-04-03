import styled from "styled-components";

export const Container = styled.div`
  border-radius: 5px;
  box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);
  padding: 30px;
  margin: 20px;
  width: 100%;
  transition: all 0.3s ease-out;
  .pokemon-card-data {
    .pokemon-field {
      /* display: flex;
      align-items: center; */
      & input {
        width: 100%;
        background-color: transparent;
        border: none;
        font-size: 14px;
        margin: 5px 0;
      }
    }
  }
`;
