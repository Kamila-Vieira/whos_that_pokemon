import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  padding: 50px 0;
  .state-initial {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .state-initial-title {
      margin-bottom: 20px;
    }
  }
  .state-playing {
    height: 100%;
  }
`;
